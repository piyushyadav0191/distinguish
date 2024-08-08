import { PrismaClient } from "@prisma/client"
import path from "path"
import fs from "fs"

const prisma = new PrismaClient()

async function deleteAllData(orderedFileNames:string[]) {
    const modelNames = orderedFileNames.map((filename) => {
        const modelName = path.basename(filename, path.extname(filename))
        return modelName.charAt(0).toUpperCase() + modelName.slice(1)
    })
    for (const modelName of modelNames) {
        const model = prisma[modelName as keyof typeof prisma]
        if(model){
            await model.deleteMany({})
            console.log(`Deleted all data from ${modelName}`)
        } else {
            console.log(`Model ${modelName} not found in prisma client`)
        }
    }
}

async function main(){
    const dataDirectory = path.join(__dirname, "seedData")
    const orderedFileNames = [
        "products.json", // Products
        "sales.json",
        "expenseSummary.json",
        "salesSummary.json",
        "purchaseSummary.json",
        "purchases.json",
        "users.json",
        "expenses.json",
        "expenseByCatgeory.json",
    ]

    await deleteAllData(orderedFileNames)

    for (const filename of orderedFileNames){
        const FilePath = path.join(dataDirectory, filename) // seedData/products.json
        const jsonData = JSON.parse(fs.readFileSync(FilePath, "utf-8"))
        const modelName = path.basename(filename, path.extname(filename)) // 
        const model : any = prisma[modelName as keyof typeof prisma]

        if(!model){
            throw new Error(`Model ${modelName} not found in prisma client`)
        }

        for (const data of jsonData){
            await model.create({
                data
            })
        }
        console.log(`Seeded ${modelName} data from ${filename}`)
    }
}

main().catch((e) => console.log(e)).finally(async () => {
    await prisma.$disconnect()
})