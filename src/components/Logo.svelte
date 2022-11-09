<script>
  import { linear } from '../utils'

  let eyePositionX = 657.11
  let eyePositionY = 449.78
  let eyeScale = 81.57

  window.addEventListener('mousemove', (e) => {
    let hoverScale = false
    try {
      // @ts-ignore
      if ('baseVal' in e.target.className) {
        // @ts-ignore
        hoverScale = e.target.className.baseVal.includes('hover-scale')
      }
    } catch (_) {
      hoverScale = false
    }

    if (!hoverScale) {
      eyePositionX = linear(e.clientX, 0, window.innerWidth, 470, 500)
      eyePositionY = linear(e.clientY, 0, window.innerHeight, 280, 500)
      // @ts-ignore
      document.getElementById('eye').style.r = '81.57'
    } else {
      eyePositionX = 580
      eyePositionY = 400
      // @ts-ignore
      document.getElementById('eye').style.r = '0'
      document.getElementById('eye').style.transition = 'all 200ms ease'
      // @ts-ignore
      document.getElementById('eye').style.r = '100'
      setTimeout(() => {
        document.getElementById('eye').style.transition = 'none'
      }, 200)
    }
  })

  export let color = 'var(--evelyna-primary)'
  export let eyeColor = 'white'
</script>

<div id="logo-container" class="hover-scale">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1080 1080"
    class="hover-scale"
  >
    <defs>
      <style>
        .cls-1 {
          fill: var(--evelyna-primary);
        }

        .cls-2 {
          fill: #fff;
        }
      </style>
    </defs>
    <path
      class="cls-1 hover-scale"
      style="fill: {color}"
      d="M923.17,876.58c-90,99.51-227.35,81.23-244.56,78.64-4.37-16.46-38.07-152.88,52.91-253.46,90-99.51,227.35-81.23,244.55-78.64C980.44,639.58,1014.14,776,923.17,876.58Z"
    />
    <path
      class="cls-1 hover-scale"
      style="fill: {color}"
      d="M796.7,228.76c-77.71-77.73-181-120.53-291-120.53H94.24V519.72c0,109.92,42.81,213.25,120.52,291s181.06,120.52,291,120.52a410.89,410.89,0,0,0,141.48-24.87,302.08,302.08,0,0,1-2.9-57.2c-.61.24-1.21.49-1.82.75A357.06,357.06,0,0,1,148.55,519.72V162.55H505.74a354.86,354.86,0,0,1,252.57,104.6,359.22,359.22,0,0,1,52.49,66.51,352.64,352.64,0,0,1,31.11,64.82q5.93,16.45,10.22,33.49a362,362,0,0,1,.29,174.28,334.7,334.7,0,0,1,58.43-13.79,416,416,0,0,0,6.38-72.74C917.23,409.81,874.43,306.47,796.7,228.76Z"
    />
    <path
      class="cls-1 hover-scale"
      style="fill: {color}"
      d="M447.32,773.55c-128.5,0-255.73-63.9-342.31-174.88l42.82-33.41c87.41,112,221,169.64,348.7,150.29C579.51,703,657.05,658,714.84,588.93c59.16-70.69,93.25-161.89,96-256.81l54.28,1.58C862,440.76,823.44,543.78,756.49,623.79,690.19,703,600.76,754.68,504.67,769.24A382.42,382.42,0,0,1,447.32,773.55Z"
    />
    <path
      class="cls-1 hover-scale"
      style="fill: {color}"
      d="M554.54,655.17a405.55,405.55,0,0,1-141.07-24.89A412.12,412.12,0,0,1,290.53,558.4a458.85,458.85,0,0,1-94-109.24c-53.3-85.8-80-187.1-77.14-293l54.29,1.45c-2.55,95.2,21.3,186.09,69,262.84C289.57,496,355.12,550.88,432.26,579.33c61.91,22.83,129,27.48,199.36,13.83A449.53,449.53,0,0,0,744.2,555.34L768.33,604C730.83,622.58,651.26,655.17,554.54,655.17Z"
    />
    <circle
      class="cls-1 hover-scale"
      style="fill: {color}"
      cx="578.96"
      cy="392.42"
      r="151.52"
    />
    <circle
      class="cls-2 hover-scale"
      style="fill: {eyeColor};"
      id="eye"
      cx={eyePositionX}
      cy={eyePositionY}
      r={eyeScale}
    />
    <path
      class="cls-1 hover-scale"
      style="fill: {color}"
      d="M579,184.4a208,208,0,1,1-147.09,60.93A206.66,206.66,0,0,1,579,184.4m0-55c-145.26,0-263,117.76-263,263s117.76,263,263,263,263-117.76,263-263-117.76-263-263-263Z"
    />
  </svg>
</div>

<style>
  #logo-container {
    width: 60px;
    margin: auto;
  }
</style>