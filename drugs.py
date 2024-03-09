import drugstone

drugstone.set_api('https://api.stable.drugst.one/')

genes = [
    "CYP2D6", "CYP2C19", "CYP3A4",
    "CYP3A5", "SLC6A4", "COMT",
    "VKORC1", "CYP2C9", 
]

adhd_drugs = [
    "Methylphenidate", "Ritalin",
    "Dexmethylphenidate","Focalin",
    "Amphetamine-dextroamphetamine", "Adderall",
    "Lisdexamfetamine", "Vyvanse",
    "Atomoxetine", "Strattera",
    "Guanfacine", "Intuniv",
    "Clonidine", "Kapvay",
    "Dextroamphetamine", "Dexedrine",
    "Methamphetamine", "Desoxyn",
    "Pemoline", "Cylert",
    "Bupropion", "Wellbutrin", "Zyban",
    "Modafinil", "Provigil",
    "Armodafinil", "Nuvigil",
    "Dextroamphetamine", "Amphetamine", "Evekeo",
    "Dextroamphetamine", "Zenzedi",
]

parameters = {
    "target": "drug",
    "algorithm": "trustrank"
}

task = drugstone.new_task(genes, parameters)

r = task.get_result()

genes = r.get_genes()
drugs = r.get_drugs()

for drug in adhd_drugs:
    if drug in drugs.keys():
        print(drug)

# save directly to files
r.download_json()
r.download_graph()