import Card from "../components/Card";
import Button from "../components/Button";

export default function AddHabit() {
  return (
    <div className="p-4 bg-bg min-h-screen flex justify-center">
      <Card className="max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add New Habit</h2>

        <input
          placeholder="Habit name"
          className="w-full mb-4 p-3 rounded-xl bg-white/70 outline-none"
        />

        <label className="text-sm text-textMuted">
          Daily Goal
        </label>
        <input type="range" className="w-full my-4" />

        <Button className="w-full">Create Habit</Button>
      </Card>
    </div>
  );
}
