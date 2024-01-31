/* import variables */
import { plotTitleSpacer, margin, width, height, transDur, blobDir, filePrefix, fileExt } from './main.js'
/* import d3 functions */
import { d3 } from './main.js'
import { xScale, colorPal, tooltip } from './main.js'
/* import udf functions */
import { mouseOver, mouseOut } from './main.js'
import { plotHsaGrps } from './main.js'
import { updatePlots } from './main.js'
import { switchPod } from './main.js'
import { switchArea } from './main.js'
import { toggleHsa } from './main.js'

let selectedArea = 'E08000026'

let data = await d3.json(blobDir + filePrefix + selectedArea + fileExt)

let projDat = data.filter(
  item => (
    item.proj_id == '1' &&
    item.end_year == '2025' &&
    item.pod == 'aae'
  )
)

plotHsaGrps(projDat)

/* hack */
d3.selectAll('.circle').style('opacity', 0)

/* when the area dropdown changes, run switchArea() with the new value */
d3.select('#selectArea').on('change', function () {
  let selectedArea = d3.select(this).property('value')
  let selectedProjVar = d3.select('#selectProjVar').property('value')
  let selectedHorizon = d3.select('#selectHorizon').property('value')
  let selectedPod = d3.select('#selectPod').property('value')
  switchArea(selectedArea, selectedProjVar, selectedHorizon, selectedPod)
})

/* when the pod dropdown changes, run switchPod() with the new value */
d3.select('#selectPod').on('change', function () {
  let selectedPod = d3.select(this).property('value')
  let selectedProjVar = d3.select('#selectProjVar').property('value')
  let selectedHorizon = d3.select('#selectHorizon').property('value')
  switchPod(data, selectedProjVar, selectedHorizon, selectedPod)
})

/* when the model horizon dropdown changes, run updatePlots() with the new value */
d3.select('#selectHorizon').on('change', function () {
  let selectedHorizon = d3.select(this).property('value')
  let selectedProjVar = d3.select('#selectProjVar').property('value')
  let selectedPod = d3.select('#selectPod').property('value')
  updatePlots(data, selectedProjVar, selectedHorizon, selectedPod)
})

/* when the projection variant dropdown changes, run updatePlots() with the new value */
d3.select('#selectProjVar').on('change', function () {
  let selectedProjVar = d3.select(this).property('value')
  let selectedHorizon = d3.select('#selectHorizon').property('value')
  let selectedPod = d3.select('#selectPod').property('value')
  updatePlots(data, selectedProjVar, selectedHorizon, selectedPod)
})

/* when the health status toggle changes show/hide circles */
d3.select('#toggleHsa').on('change', function () {
  const opacity = this.checked ? 1 : 0
  toggleHsa(opacity)
})
