// ==========================================
// FRIDAY: ARRAYS, GENERICS & BEST PRACTICES
// ==========================================

// 1. DATA MODEL DEFINITIONS (PascalCase Convention)

interface MentorTask {
    id: number;
    title: string;
    isCompleted: boolean;
}

// 2. GENERICS: REUSABLE DATA WRAPPER 

class DataStorage<T> {
    private collection: T[] = [];

    addItem(item: T): void {
        this.collection.push(item);
    }

    getAllItems(): T[] {
        return this.collection;
    }
}

// 3. REUSABLE UTILITY FUNCTION WITH GENERICS

function getLastItem<T>(items: T[]): T | undefined {
    if (items.length === 0) return undefined; 
    return items[items.length - 1]
}

//Task Storage
const taskStorage = new DataStorage<MentorTask>();
taskStorage.addItem({ id: 1, title: "Configure GitHub Profile README", isCompleted: true });
taskStorage.addItem({ id: 2, title: "Build JavaScript Student CLI", isCompleted: false });
taskStorage.addItem({ id: 3, title: "Master TypeScript Generics", isCompleted: true });

//Show All Task
const allTasks = taskStorage.getAllItems();
console.log("\n======= Friday Mentorship Task List =======");
allTasks.forEach(task => {
    console.log(`[ID: ${task.id}] ${task.title} -> ${task.isCompleted ? "✅ Done" : "⏳ In Progress"}`);
});
console.log("==============================================\n");

//Get last item
const latestTask = getLastItem(allTasks);
if (latestTask) {
    console.log(`The most recent task assigned is: "${latestTask.title}"`);
}
