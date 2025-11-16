import { Info, MoreHorizontal } from "lucide-react";

interface Activity {
  title: string;
  description: string[];
}

interface DayActivity {
  day: number;
  title: string;
  activities?: Activity[];
}

interface ActivityTimelineCardProps {
  days: DayActivity[];
}

const ActivityTimelineCard = ({ days }: ActivityTimelineCardProps) => {
  return (
    <div className="glass-card rounded-3xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold">DAYS & ACTIVITY</h3>
        <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {days.map((day, idx) => (
          <div key={day.day} className="group">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-muted-foreground">Day {day.day}</span>
                  <span className="font-semibold">{day.title}</span>
                </div>
                
                {day.activities && (
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {day.activities.map((activity, actIdx) => (
                      <li key={actIdx}>
                        <div className="font-medium text-foreground">{activity.title}</div>
                        {activity.description.map((desc, descIdx) => (
                          <div key={descIdx} className="text-xs ml-2">• {desc}</div>
                        ))}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <button className="p-2 rounded-lg hover:bg-background/50 transition-colors">
                <Info className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimelineCard;
