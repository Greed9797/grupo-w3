import json

def extract_content(node, path=""):
    content = []
    
    node_name = node.get("name", "Unnamed")
    node_type = node.get("type", "Unknown")
    current_path = f"{path} > {node_name}" if path else node_name
    
    if node_type == "TEXT":
        characters = node.get("characters", "").strip()
        if characters:
            content.append(f"[{current_path}] TEXT: {characters}")
            
    if "image" in node_name.lower() or node_type == "RECTANGLE":
        # Check if it has an image fill
        fills = node.get("fills", [])
        has_image = any(fill.get("type") == "IMAGE" for fill in fills)
        if has_image or "image" in node_name.lower():
            content.append(f"[{current_path}] IMAGE/RECTANGLE: {node_name}")
            
    for child in node.get("children", []):
        content.extend(extract_content(child, current_path))
        
    return content

try:
    with open("figma_file2.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        
    document = data.get("document", {})
    canvas = document.get("children", [])[0] # Page 1
    
    desktop_frame = None
    for child in canvas.get("children", []):
        if child.get("name") == "Desktop - 1280":
            desktop_frame = child
            break
            
    if desktop_frame:
        with open("figma_out.txt", "w", encoding="utf-8") as out:
            out.write("Extracting content from Desktop - 1280...\n")
            for section in desktop_frame.get("children", []):
                out.write(f"\n--- Section: {section.get('name')} ---\n")
                lines = extract_content(section)
                for line in lines:
                    out.write(line + "\n")
        print("Done writing to figma_out.txt")
    else:
        print("Could not find Desktop frame.")
        
except Exception as e:
    print(f"Error parsing local Figma data: {e}")
