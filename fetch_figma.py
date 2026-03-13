import urllib.request
import json
import os

TOKEN = os.environ.get('FIGMA_TOKEN', '')
FILE_KEY = 'qnefQNTvLqqr8Puyd80heg'

url = f"https://api.figma.com/v1/files/{FILE_KEY}"
req = urllib.request.Request(url, headers={'X-Figma-Token': TOKEN})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        print("Figma File Name:", data.get("name"))
        document = data.get("document", {})
        pages = document.get("children", [])
        
        for page in pages:
            print(f"Page: {page.get('name')} (id: {page.get('id')})")
            for node in page.get("children", []):
                print(f"  Node: {node.get('name')} (type: {node.get('type')}, id: {node.get('id')})")
except Exception as e:
    print(f"Error fetching Figma data: {e}")
