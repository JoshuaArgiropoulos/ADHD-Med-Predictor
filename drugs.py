import drugstone

drugstone.set_api('https://api.stable.drugst.one/')

genes = [
    "CYP2D6", "CYP2C19", "CYP3A4",
    "CYP3A5", "SLC6A4", "COMT",
    "VKORC1", "CYP2C9", 
]

parameters = {
    "target": "drug",
    "algorithm": "trustrank"
}

task = drugstone.new_task(genes, parameters)

r = task.get_result()

genes = r.get_genes()
drugs = r.get_drugs()
print(drugs)

# save directly to files
r.download_json()
r.download_graph()