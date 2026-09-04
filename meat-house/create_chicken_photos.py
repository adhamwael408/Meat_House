import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

def draw_meat_house_stamp(draw, width, height, label="CHICKEN"):
    # Draw Meat House Stamp Badge
    cx, cy, r = width - 60, 60, 40
    # Outer ring
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(158, 42, 43, 240), outline=(212, 175, 55), width=3)
    draw.ellipse([cx-r+4, cy-r+4, cx+r-4, cy+r-4], outline=(255, 255, 255), width=1)
    
    # Stamp Text (Draw custom text or badge)
    draw.text((cx-28, cy-14), "MEAT HOUSE", fill=(255, 255, 255))
    draw.text((cx-24, cy+4), label, fill=(212, 175, 55))

def create_chicken_whole():
    w, h = 600, 400
    img = Image.new('RGB', (w, h), (20, 14, 12))
    draw = ImageDraw.Draw(img)
    
    # Background slate / wooden butcher counter
    for y in range(h):
        r = int(25 + (y/h)*10)
        g = int(18 + (y/h)*8)
        b = int(16 + (y/h)*6)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
        
    # Wooden butcher board
    draw.rounded_rectangle([60, 220, 540, 360], radius=16, fill=(58, 38, 28), outline=(38, 24, 16), width=3)
    
    # Whole chicken body (Raw poultry skin tones #F7E6D3, #EED5BA, #D8B28C)
    chicken_base = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    cdraw = ImageDraw.Draw(chicken_base)
    
    # Main Body Ellipse
    cdraw.ellipse([180, 110, 420, 260], fill=(245, 226, 206, 255))
    # Breast Highlights
    cdraw.ellipse([210, 120, 390, 230], fill=(252, 238, 222, 255))
    # Legs / Drumsticks
    cdraw.ellipse([340, 160, 450, 240], fill=(235, 208, 182, 255))
    cdraw.ellipse([320, 180, 430, 260], fill=(225, 198, 172, 255))
    # Bone ends
    cdraw.ellipse([440, 190, 460, 210], fill=(255, 250, 245, 255))
    cdraw.ellipse([420, 220, 440, 240], fill=(255, 250, 245, 255))
    
    # Texture & Skin shading
    chicken_base = chicken_base.filter(ImageFilter.GaussianBlur(radius=3))
    img.paste(chicken_base, (0, 0), chicken_base)
    
    # Fresh Herbs (Rosemary & Parsley)
    for i in range(15):
        rx = 160 + i * 20
        ry = 260 + math.sin(i) * 15
        draw.line([(rx, ry), (rx+15, ry-10)], fill=(45, 90, 39), width=3)
        draw.line([(rx, ry), (rx-10, ry-15)], fill=(60, 110, 50), width=2)
        
    # Lemon slices
    draw.ellipse([120, 250, 170, 300], fill=(230, 194, 0), outline=(255, 230, 80), width=3)
    draw.ellipse([130, 260, 160, 290], fill=(250, 220, 40))
    
    draw_meat_house_stamp(draw, w, h, "WHOLE CHICKEN")
    img.save("d:/meat-house/assets/images/chicken_whole.png")

def create_chicken_breast():
    w, h = 600, 400
    img = Image.new('RGB', (w, h), (18, 12, 10))
    draw = ImageDraw.Draw(img)
    
    # Dark Slate Board
    for y in range(h):
        c = int(22 + (y/h)*15)
        draw.line([(0, y), (w, y)], fill=(c, c-4, c-6))
        
    # Fresh Chicken Breasts (Raw pinkish white fillets)
    # Fillet 1
    breast1 = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(breast1)
    bdraw.ellipse([120, 100, 380, 270], fill=(250, 232, 220, 255))
    bdraw.ellipse([140, 120, 350, 250], fill=(255, 242, 232, 255))
    breast1 = breast1.filter(ImageFilter.GaussianBlur(radius=4))
    img.paste(breast1, (0, 0), breast1)
    
    # Fillet 2
    breast2 = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    bdraw2 = ImageDraw.Draw(breast2)
    bdraw2.ellipse([220, 120, 480, 290], fill=(245, 225, 212, 240))
    bdraw2.ellipse([250, 140, 450, 270], fill=(252, 236, 225, 240))
    breast2 = breast2.filter(ImageFilter.GaussianBlur(radius=4))
    img.paste(breast2, (0, 0), breast2)
    
    # Rosemary & Black Pepper corns
    for i in range(25):
        px = random.randint(140, 460)
        py = random.randint(110, 280)
        draw.ellipse([px, py, px+4, py+4], fill=(30, 20, 15))
        
    draw_meat_house_stamp(draw, w, h, "BREAST FILLET")
    img.save("d:/meat-house/assets/images/chicken_breast.png")

def create_chicken_pane():
    w, h = 600, 400
    img = Image.new('RGB', (w, h), (24, 16, 12))
    draw = ImageDraw.Draw(img)
    
    # Dark Warm Table
    for y in range(h):
        c = int(30 + (y/h)*10)
        draw.line([(0, y), (w, y)], fill=(c, c-8, c-12))
        
    # Golden Crispy Breaded Pane Cutlets
    for offset, color in [(0, (225, 155, 40)), (40, (205, 135, 25)), (80, (235, 165, 50))]:
        pane = Image.new('RGBA', (w, h), (0, 0, 0, 0))
        pdraw = ImageDraw.Draw(pane)
        pdraw.ellipse([140 + offset, 110 + offset//2, 380 + offset, 250 + offset//2], fill=color + (255,))
        pane = pane.filter(ImageFilter.GaussianBlur(radius=2))
        img.paste(pane, (0, 0), pane)
        
        # Crunchy Crumbs
        for _ in range(60):
            cx = random.randint(140 + offset, 370 + offset)
            cy = random.randint(110 + offset//2, 240 + offset//2)
            draw.ellipse([cx, cy, cx+3, cy+3], fill=(255, 220, 130))
            
    draw_meat_house_stamp(draw, w, h, "CRISPY PANE")
    img.save("d:/meat-house/assets/images/chicken_pane.png")

if __name__ == "__main__":
    create_chicken_whole()
    create_chicken_breast()
    create_chicken_pane()
    print("Chicken product photos generated successfully!")
