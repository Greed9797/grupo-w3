import json

def extract_styles(node, path="", depth=0):
    results = []
    if depth > 5:
        return results
    
    node_name = node.get("name", "Unnamed")
    node_type = node.get("type", "Unknown")
    current_path = f"{path} > {node_name}" if path else node_name
    
    # Extract fills
    fills = node.get("fills", [])
    if fills:
        fill_str = str(fills)
        results.append(f"[{current_path}] ({node_type}) FILLS: {fill_str}")
    
    # Extract background color
    bg = node.get("backgroundColor")
    if bg:
        results.append(f"[{current_path}] BACKGROUND: {bg}")
    
    # Extract strokes
    strokes = node.get("strokes", [])
    if strokes:
        results.append(f"[{current_path}] STROKES: {strokes}")
    
    # Extract corner radius
    corner = node.get("cornerRadius") or node.get("topLeftRadius")
    if corner:
        results.append(f"[{current_path}] CORNER_RADIUS: {corner}")
    
    # Extract size
    bbox = node.get("absoluteBoundingBox")
    if bbox:
        results.append(f"[{current_path}] SIZE: w={bbox.get('width')}, h={bbox.get('height')}, x={bbox.get('x')}, y={bbox.get('y')}")
    
    # Extract effects (shadows, blurs)
    effects = node.get("effects", [])
    if effects:
        results.append(f"[{current_path}] EFFECTS: {effects}")
    
    for child in node.get("children", []):
        results.extend(extract_styles(child, current_path, depth + 1))
    
    return results

try:
    with open("figma_file2.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    document = data.get("document", {})
    canvas = document.get("children", [])[0]  # Page 1
    
    desktop_frame = None
    for child in canvas.get("children", []):
        if child.get("name") == "Desktop - 1280":
            desktop_frame = child
            break
    
    if desktop_frame:
        # Just get Dobra 1 (Hero) to start
        for section in desktop_frame.get("children", []):
            section_name = section.get("name", "")
            if "Dobra 1" in section_name or "Dobra 2" in section_name:
                print(f"\n=== SECTION: {section_name} ===")
                lines = extract_styles(section)
                for line in lines[:60]:
                    print(line)
        print("\n--- DONE ---")
    else:
        print("Cannot find Desktop frame")
except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
