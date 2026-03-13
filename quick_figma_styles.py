import json
import sys

def find_hero(data):
    """Navigate quickly to Dobra 1 of Desktop-1280 without processing the whole tree"""
    doc = data["document"]
    page = doc["children"][0]  # Page 1
    
    desktop1280 = None
    for child in page["children"]:
        if child.get("name") == "Desktop - 1280":
            desktop1280 = child
            break
    
    if not desktop1280:
        print("Desktop - 1280 not found")
        return
    
    for dobra in desktop1280["children"]:
        dobra_name = dobra.get("name", "")
        print(f"\n=== {dobra_name} ===")
        print(f"  type: {dobra.get('type')}")
        print(f"  bbox: {dobra.get('absoluteBoundingBox')}")
        print(f"  fills: {dobra.get('fills')}")
        print(f"  bg: {dobra.get('backgroundColor')}")
        print(f"  effects: {dobra.get('effects')}")
        print(f"  Children ({len(dobra.get('children', []))}):") 
        for child in dobra.get("children", []):
            child_name = child.get("name", "")
            child_type = child.get("type", "")
            fills = child.get("fills", [])
            bbox = child.get("absoluteBoundingBox", {})
            effects = child.get("effects", [])
            print(f"    - {child_name} ({child_type}) fills={fills[:1]} bbox_size=({bbox.get('width')},{bbox.get('height')}) effects={effects}")

print("Loading JSON...")
sys.stdout.flush()

with open("figma_file2.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("Loaded. Extracting...")
find_hero(data)
print("\nDONE")
