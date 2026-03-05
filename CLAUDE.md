# Sinusoidal Scroller Specification

## Project Overview
This project implements a sinusoidal scroller effect using PixiJS. It creates a scrolling text animation with a wave-like motion that follows a sinusoidal pattern.

## Key Features
- **Sinusoidal Animation**: Text scrolls with a wave-like motion using sine functions
- **Bitmap Font System**: Uses a 8-color font texture with glyph mapping
- **Pixel-perfect Rendering**: Maintains crisp pixel art quality
- **Responsive Design**: Adapts to window resizing
- **Seamless Looping**: Text scrolls seamlessly from end to beginning

## Technical Implementation

### Core Components
1. **Font Mapping System**:
   - 8-color font PNG texture
   - Glyph mapping with position and advance information
   - Support for standard characters, numbers, and punctuation

2. **PixiJS Application**:
   - Uses PixiJS v8 for rendering
   - Configured for pixel-perfect rendering
   - Antialiasing disabled for crispness

3. **Text Strip Construction**:
   - Builds text strips from individual character slices
   - Each character is sliced into 1px wide vertical strips
   - Scales text for pixel-perfect rendering

4. **Animation System**:
   - Uses PixiJS ticker for frame-based animation
   - Implements scroll position tracking
   - Applies sinusoidal wave motion to each text slice
   - Uses time-based animation for smooth performance

### Configuration Parameters
- **SCROLL_SPEED**: 3 pixels per frame
- **SCALE**: 4x scaling factor
- **BOB_AMP**: 200 pixels amplitude for wave motion
- **BOB_FREQ**: 0.0035 radians per pixel spatial frequency
- **BOB_SPEED**: 0.03535 radians per frame temporal speed

### Animation Process
1. Text is loaded from LINES array
2. Text strips are built with individual character slices
3. Two identical strips are created for seamless looping
4. Each 1px slice is tagged with its local X position
5. Animation loop:
   - Updates scroll position
   - Applies sinusoidal wave motion to each slice
   - Updates slice Y positions based on wave function

## File Structure
- `index.html`: Main HTML file with embedded JavaScript
- `8-color-font.png`: Font texture image
- `README.md`: Project documentation

## Dependencies
- PixiJS v8 (loaded from CDN)
- Modern web browser with JavaScript support

## Usage
1. Open `index.html` in a modern web browser
2. The sinusoidal scroller will automatically start
3. The animation is responsive to window resizing

## Design Philosophy
- Pixel-perfect rendering for retro aesthetic
- Efficient animation using time-based updates
- Minimal dependencies (only PixiJS and CDN resources)
- Responsive design that works on all screen sizes
- Smooth animation using sine wave functions for natural motion