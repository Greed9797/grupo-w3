import json

def get_hero_fills(data):
    doc = data["document"]
    page = doc["children"][0]
    
    desktop1280 = None
    for child in page["children"]:
        if child.get("name") == "Desktop - 1280":
            desktop1280 = child
            break
    
    hero = None
    for dobra in desktop1280["children"]:
        if dobra.get("name", "").startswith("Dobra 1"):
            hero = dobra
            break
    
    if not hero:
        print("Hero not found")
        return
    
    def print_node(node, depth=0, max_depth=4):
        indent = "  " * depth
        name = node.get("name", "")
        ntype = node.get("type", "")
        fills = node.get("fills", [])
        effects = node.get("effects", [])
        bbox = node.get("absoluteBoundingBox", {})
        
        fill_summary = []
        for f in fills:
            ft = f.get("type")
            if ft == "SOLID":
                c = f.get("color", {})
                r = int(c.get("r", 0) * 255)
                g_val = int(c.get("g", 0) * 255)
                b = int(c.get("b", 0) * 255)
                a = c.get("a", 1.0)
                fill_summary.append(f"SOLID #{r:02x}{g_val:02x}{b:02x} a={a:.2f}")
            elif ft == "GRADIENT_RADIAL":
                stops = f.get("gradientStops", [])
                fill_summary.append(f"GRADIENT_RADIAL stops={[(s.get('position'), s.get('color')) for s in stops]}")
            elif ft == "IMAGE":
                fill_summary.append(f"IMAGE scale={f.get('scaleMode')}")
            else:
                fill_summary.append(f"{ft}")
        
        eff_summary = []
        for e in effects:
            et = e.get("type")
            if et == "DROP_SHADOW":
                ec = e.get("color", {})
                eff_summary.append(f"DROP_SHADOW r={ec.get('r',0):.2f} a={ec.get('a',0):.2f}")
            elif et == "INNER_SHADOW":
                eff_summary.append(f"INNER_SHADOW")
            elif et == "BACKGROUND_BLUR":
                eff_summary.append(f"BG_BLUR r={e.get('radius')}")
            elif et == "LAYER_BLUR":
                eff_summary.append(f"LAYER_BLUR r={e.get('radius')}")
        
        size_str = f"w={bbox.get('width',0):.0f} h={bbox.get('height',0):.0f}"
        print(f"{indent}[{name}] ({ntype}) {size_str} fills={fill_summary} effects={eff_summary}")
        
        if depth < max_depth:
            for child in node.get("children", []):
                print_node(child, depth+1, max_depth)
    
    print("=== HERO (Dobra 1) FULL TREE ===")
    print_node(hero)

print("Loading...")
with open("figma_file2.json", "r", encoding="utf-8") as f:
    data = json.load(f)
print("Loaded. Processing...")
get_hero_fills(data)
print("DONE")
