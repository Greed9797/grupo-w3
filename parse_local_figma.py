import json

def print_tree(node, depth=0, max_depth=3):
    if depth > max_depth:
        return
    indent = "  " * depth
    name = node.get("name", "Unnamed")
    node_type = node.get("type", "Unknown")
    print(f"{indent}- {name} ({node_type})")
    
    for child in node.get("children", []):
        print_tree(child, depth + 1, max_depth)

try:
    with open("figma_file2.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        
    print(f"Figma File Name: {data.get('name')}")
    document = data.get("document", {})
    print_tree(document, max_depth=3)
except Exception as e:
    print(f"Error parsing local Figma data: {e}")
