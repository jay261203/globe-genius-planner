import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, MapPin, Clock, DollarSign, Edit2, Trash2, Plus, 
  Check, X, ChevronDown, ChevronUp, Lightbulb, Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  GeneratedItinerary, 
  ItineraryDay, 
  Activity,
  updateActivity,
  deleteActivity,
  addActivity,
  saveItinerary 
} from "@/services/api";
import { toast } from "sonner";

interface ItineraryDisplayProps {
  itinerary: GeneratedItinerary;
  onUpdate: (itinerary: GeneratedItinerary) => void;
}

const ItineraryDisplay = ({ itinerary, onUpdate }: ItineraryDisplayProps) => {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [editingActivity, setEditingActivity] = useState<string | null>(null);
  const [addingToDay, setAddingToDay] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleEditActivity = async (dayNumber: number, activity: Activity, updates: Partial<Activity>) => {
    try {
      await updateActivity(itinerary.id, dayNumber, activity.id, updates);
      
      const updatedDays = itinerary.days.map(day => {
        if (day.day === dayNumber) {
          return {
            ...day,
            activities: day.activities.map(a => 
              a.id === activity.id ? { ...a, ...updates } : a
            )
          };
        }
        return day;
      });
      
      onUpdate({ ...itinerary, days: updatedDays });
      setEditingActivity(null);
      toast.success("Activity updated");
    } catch (error) {
      toast.error("Failed to update activity");
    }
  };

  const handleDeleteActivity = async (dayNumber: number, activityId: string) => {
    try {
      await deleteActivity(itinerary.id, dayNumber, activityId);
      
      const updatedDays = itinerary.days.map(day => {
        if (day.day === dayNumber) {
          return {
            ...day,
            activities: day.activities.filter(a => a.id !== activityId)
          };
        }
        return day;
      });
      
      onUpdate({ ...itinerary, days: updatedDays });
      toast.success("Activity removed");
    } catch (error) {
      toast.error("Failed to delete activity");
    }
  };

  const handleAddActivity = async (dayNumber: number, newActivity: Omit<Activity, "id">) => {
    try {
      const created = await addActivity(itinerary.id, dayNumber, newActivity);
      
      const updatedDays = itinerary.days.map(day => {
        if (day.day === dayNumber) {
          return {
            ...day,
            activities: [...day.activities, created]
          };
        }
        return day;
      });
      
      onUpdate({ ...itinerary, days: updatedDays });
      setAddingToDay(null);
      toast.success("Activity added");
    } catch (error) {
      toast.error("Failed to add activity");
    }
  };

  const handleSaveItinerary = async () => {
    setIsSaving(true);
    try {
      await saveItinerary(itinerary);
      toast.success("Itinerary saved successfully");
    } catch (error) {
      toast.error("Failed to save itinerary");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            {itinerary.destination}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {itinerary.start_date} — {itinerary.end_date} • {itinerary.days.length} days
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Est. Budget: <span className="font-medium text-foreground">{itinerary.total_budget}</span>
          </span>
          <Button onClick={handleSaveItinerary} disabled={isSaving} size="sm">
            <Save className="w-4 h-4 mr-1" />
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>

      {/* Days */}
      <div className="space-y-4">
        {itinerary.days.map((day) => (
          <DayCard
            key={day.day}
            day={day}
            isExpanded={expandedDays.includes(day.day)}
            onToggle={() => toggleDay(day.day)}
            editingActivity={editingActivity}
            setEditingActivity={setEditingActivity}
            addingToDay={addingToDay}
            setAddingToDay={setAddingToDay}
            onEditActivity={(activity, updates) => handleEditActivity(day.day, activity, updates)}
            onDeleteActivity={(activityId) => handleDeleteActivity(day.day, activityId)}
            onAddActivity={(activity) => handleAddActivity(day.day, activity)}
          />
        ))}
      </div>

      {/* Tips */}
      {itinerary.tips.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-muted/30 rounded-xl p-5 border border-border/50"
        >
          <h3 className="font-medium text-foreground flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-primary" />
            Travel Tips
          </h3>
          <ul className="space-y-2">
            {itinerary.tips.map((tip, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

interface DayCardProps {
  day: ItineraryDay;
  isExpanded: boolean;
  onToggle: () => void;
  editingActivity: string | null;
  setEditingActivity: (id: string | null) => void;
  addingToDay: number | null;
  setAddingToDay: (day: number | null) => void;
  onEditActivity: (activity: Activity, updates: Partial<Activity>) => void;
  onDeleteActivity: (activityId: string) => void;
  onAddActivity: (activity: Omit<Activity, "id">) => void;
}

const DayCard = ({
  day,
  isExpanded,
  onToggle,
  editingActivity,
  setEditingActivity,
  addingToDay,
  setAddingToDay,
  onEditActivity,
  onDeleteActivity,
  onAddActivity,
}: DayCardProps) => {
  return (
    <motion.div
      className="bg-card border border-border/60 rounded-xl overflow-hidden"
      layout
    >
      {/* Day Header */}
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">D{day.day}</span>
          </div>
          <div className="text-left">
            <h3 className="font-medium text-foreground">{day.title}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {day.date}
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {/* Activities */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border/50"
          >
            <div className="p-5 space-y-3">
              {day.activities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  activity={activity}
                  isEditing={editingActivity === activity.id}
                  onEdit={() => setEditingActivity(activity.id)}
                  onCancel={() => setEditingActivity(null)}
                  onSave={(updates) => onEditActivity(activity, updates)}
                  onDelete={() => onDeleteActivity(activity.id)}
                />
              ))}

              {/* Add Activity */}
              {addingToDay === day.day ? (
                <NewActivityForm
                  onAdd={onAddActivity}
                  onCancel={() => setAddingToDay(null)}
                />
              ) : (
                <button
                  onClick={() => setAddingToDay(day.day)}
                  className="w-full py-3 border-2 border-dashed border-border/60 rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Activity
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface ActivityItemProps {
  activity: Activity;
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: (updates: Partial<Activity>) => void;
  onDelete: () => void;
}

const ActivityItem = ({
  activity,
  isEditing,
  onEdit,
  onCancel,
  onSave,
  onDelete,
}: ActivityItemProps) => {
  const [editData, setEditData] = useState(activity);

  if (isEditing) {
    return (
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        className="bg-muted/50 rounded-lg p-4 space-y-3"
      >
        <input
          value={editData.title}
          onChange={(e) => setEditData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
          placeholder="Activity title"
        />
        <textarea
          value={editData.description}
          onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm resize-none"
          rows={2}
          placeholder="Description"
        />
        <div className="grid grid-cols-3 gap-2">
          <input
            value={editData.time}
            onChange={(e) => setEditData(prev => ({ ...prev, time: e.target.value }))}
            className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
            placeholder="Time"
          />
          <input
            value={editData.location}
            onChange={(e) => setEditData(prev => ({ ...prev, location: e.target.value }))}
            className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
            placeholder="Location"
          />
          <input
            value={editData.duration}
            onChange={(e) => setEditData(prev => ({ ...prev, duration: e.target.value }))}
            className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
            placeholder="Duration"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="ghost" onClick={onCancel}>
            <X className="w-4 h-4 mr-1" /> Cancel
          </Button>
          <Button size="sm" onClick={() => onSave(editData)}>
            <Check className="w-4 h-4 mr-1" /> Save
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg group hover:bg-muted/50 transition-colors"
    >
      <div className="flex-shrink-0 text-center">
        <span className="text-sm font-medium text-primary">{activity.time}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground text-sm">{activity.title}</h4>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{activity.description}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {activity.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {activity.duration}
          </span>
          {activity.cost && (
            <span className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" /> {activity.cost}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onEdit}
          className="p-2 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button
          onClick={onDelete}
          className="p-2 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

interface NewActivityFormProps {
  onAdd: (activity: Omit<Activity, "id">) => void;
  onCancel: () => void;
}

const NewActivityForm = ({ onAdd, onCancel }: NewActivityFormProps) => {
  const [formData, setFormData] = useState({
    time: "",
    title: "",
    description: "",
    location: "",
    duration: "",
    cost: "",
  });

  const handleSubmit = () => {
    if (!formData.title || !formData.time) return;
    onAdd(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-muted/50 rounded-lg p-4 space-y-3"
    >
      <input
        value={formData.title}
        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
        placeholder="Activity title *"
      />
      <textarea
        value={formData.description}
        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm resize-none"
        rows={2}
        placeholder="Description"
      />
      <div className="grid grid-cols-2 gap-2">
        <input
          value={formData.time}
          onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
          className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
          placeholder="Time * (e.g., 09:00)"
        />
        <input
          value={formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
          placeholder="Location"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input
          value={formData.duration}
          onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
          className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
          placeholder="Duration (e.g., 2 hours)"
        />
        <input
          value={formData.cost}
          onChange={(e) => setFormData(prev => ({ ...prev, cost: e.target.value }))}
          className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
          placeholder="Cost (optional)"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button size="sm" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="sm" onClick={handleSubmit}>
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </div>
    </motion.div>
  );
};

export default ItineraryDisplay;
