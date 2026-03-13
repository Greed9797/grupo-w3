import json

def get_rectangle2_fills(data):
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
    
    def show_fills(fills):
        for f in fills:
            ft = f.get("type")
            if ft == "GRADIENT_RADIAL" or ft == "GRADIENT_LINEAR":
                stops = f.get("gradientStops", [])
                transform = f.get("gradientTransform", [])
                print(f"  Type: {ft}")
                print(f"  Transform: {transform}")
                for s in stops:
                    c = s.get("color", {})
                    r = int(c.get("r", 0) * 255)
                    g_val = int(c.get("g", 0) * 255)
                    b = int(c.get("b", 0) * 255)
                    a = c.get("a", 1.0)
                    print(f"    Stop pos={s.get('position'):.3f}: #{r:02x}{g_val:02x}{b:02x} a={a:.3f}")
            elif ft == "SOLID":
                c = f.get("color", {})
                r = int(c.get("r", 0) * 255)
                g_val = int(c.get("g", 0) * 255)
                b = int(c.get("b", 0) * 255)
                a = c.get("a", 1.0)
                print(f"  Type: SOLID #{r:02x}{g_val:02x}{b:02x} a={a:.2f} opacity={f.get('opacity', 1)}")
            elif ft == "IMAGE":
                print(f"  Type: IMAGE mode={f.get('scaleMode')}")
            else:
                print(f"  Type: {ft}")
    
    # Show Rectangle 2 (the hero background rectangle)
    for child in hero.get("children", []):
        name = child.get("name", "")
        if name == "Rectangle 2":
            print(f"=== Rectangle 2 fills ===")
            show_fills(child.get("fills", []))
            bbox = child.get("absoluteBoundingBox", {})
            print(f"  Size: w={bbox.get('width')}, h={bbox.get('height')}")
        
        # CTA button fills
        if name == "Frame 28":
            for sub in child.get("children", []):
                if sub.get("name") == "Botão":
                    print(f"\n=== Frame 28 > Botão fills ===")
                    show_fills(sub.get("fills", []))
        
        # Menu
        if name == "Menu":
            print(f"\n=== Menu fills ===")
            show_fills(child.get("fills", []))

print("Loading...")
with open("figma_file2.json", "r", encoding="utf-8") as f:
    data = json.load(f)
print("Loaded.")
get_rectangle2_fills(data)
print("DONE")
