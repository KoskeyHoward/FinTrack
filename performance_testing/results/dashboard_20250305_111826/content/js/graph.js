/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 4583.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 4.0], [2.6, 4.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 10.0], [10.8, 10.0], [10.9, 10.0], [11.0, 10.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 11.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 12.0], [16.8, 12.0], [16.9, 12.0], [17.0, 12.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 15.0], [22.9, 15.0], [23.0, 15.0], [23.1, 15.0], [23.2, 15.0], [23.3, 15.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 16.0], [24.8, 16.0], [24.9, 16.0], [25.0, 16.0], [25.1, 16.0], [25.2, 16.0], [25.3, 16.0], [25.4, 16.0], [25.5, 16.0], [25.6, 16.0], [25.7, 16.0], [25.8, 16.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 17.0], [27.2, 17.0], [27.3, 17.0], [27.4, 17.0], [27.5, 17.0], [27.6, 17.0], [27.7, 17.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 17.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 17.0], [29.2, 17.0], [29.3, 17.0], [29.4, 17.0], [29.5, 17.0], [29.6, 17.0], [29.7, 17.0], [29.8, 18.0], [29.9, 18.0], [30.0, 18.0], [30.1, 18.0], [30.2, 18.0], [30.3, 18.0], [30.4, 18.0], [30.5, 18.0], [30.6, 18.0], [30.7, 18.0], [30.8, 18.0], [30.9, 18.0], [31.0, 18.0], [31.1, 18.0], [31.2, 18.0], [31.3, 18.0], [31.4, 18.0], [31.5, 18.0], [31.6, 18.0], [31.7, 18.0], [31.8, 18.0], [31.9, 18.0], [32.0, 18.0], [32.1, 18.0], [32.2, 18.0], [32.3, 18.0], [32.4, 18.0], [32.5, 18.0], [32.6, 18.0], [32.7, 18.0], [32.8, 18.0], [32.9, 18.0], [33.0, 18.0], [33.1, 18.0], [33.2, 19.0], [33.3, 19.0], [33.4, 19.0], [33.5, 19.0], [33.6, 19.0], [33.7, 19.0], [33.8, 19.0], [33.9, 19.0], [34.0, 19.0], [34.1, 19.0], [34.2, 19.0], [34.3, 19.0], [34.4, 19.0], [34.5, 19.0], [34.6, 19.0], [34.7, 19.0], [34.8, 19.0], [34.9, 19.0], [35.0, 19.0], [35.1, 19.0], [35.2, 19.0], [35.3, 19.0], [35.4, 19.0], [35.5, 19.0], [35.6, 19.0], [35.7, 19.0], [35.8, 19.0], [35.9, 19.0], [36.0, 19.0], [36.1, 19.0], [36.2, 19.0], [36.3, 19.0], [36.4, 19.0], [36.5, 19.0], [36.6, 19.0], [36.7, 19.0], [36.8, 19.0], [36.9, 20.0], [37.0, 20.0], [37.1, 20.0], [37.2, 20.0], [37.3, 20.0], [37.4, 20.0], [37.5, 20.0], [37.6, 20.0], [37.7, 20.0], [37.8, 20.0], [37.9, 20.0], [38.0, 20.0], [38.1, 20.0], [38.2, 20.0], [38.3, 20.0], [38.4, 20.0], [38.5, 20.0], [38.6, 20.0], [38.7, 20.0], [38.8, 20.0], [38.9, 20.0], [39.0, 20.0], [39.1, 20.0], [39.2, 20.0], [39.3, 20.0], [39.4, 20.0], [39.5, 20.0], [39.6, 20.0], [39.7, 20.0], [39.8, 20.0], [39.9, 20.0], [40.0, 20.0], [40.1, 20.0], [40.2, 20.0], [40.3, 20.0], [40.4, 20.0], [40.5, 20.0], [40.6, 20.0], [40.7, 20.0], [40.8, 21.0], [40.9, 21.0], [41.0, 21.0], [41.1, 21.0], [41.2, 21.0], [41.3, 21.0], [41.4, 21.0], [41.5, 21.0], [41.6, 21.0], [41.7, 21.0], [41.8, 21.0], [41.9, 21.0], [42.0, 21.0], [42.1, 21.0], [42.2, 21.0], [42.3, 21.0], [42.4, 21.0], [42.5, 21.0], [42.6, 21.0], [42.7, 21.0], [42.8, 21.0], [42.9, 21.0], [43.0, 21.0], [43.1, 21.0], [43.2, 21.0], [43.3, 21.0], [43.4, 21.0], [43.5, 21.0], [43.6, 21.0], [43.7, 21.0], [43.8, 21.0], [43.9, 21.0], [44.0, 21.0], [44.1, 21.0], [44.2, 21.0], [44.3, 21.0], [44.4, 21.0], [44.5, 21.0], [44.6, 21.0], [44.7, 21.0], [44.8, 21.0], [44.9, 22.0], [45.0, 22.0], [45.1, 22.0], [45.2, 22.0], [45.3, 22.0], [45.4, 22.0], [45.5, 22.0], [45.6, 22.0], [45.7, 22.0], [45.8, 22.0], [45.9, 22.0], [46.0, 22.0], [46.1, 22.0], [46.2, 22.0], [46.3, 22.0], [46.4, 22.0], [46.5, 22.0], [46.6, 22.0], [46.7, 22.0], [46.8, 22.0], [46.9, 22.0], [47.0, 22.0], [47.1, 22.0], [47.2, 22.0], [47.3, 22.0], [47.4, 22.0], [47.5, 22.0], [47.6, 22.0], [47.7, 22.0], [47.8, 22.0], [47.9, 22.0], [48.0, 22.0], [48.1, 22.0], [48.2, 22.0], [48.3, 22.0], [48.4, 22.0], [48.5, 22.0], [48.6, 22.0], [48.7, 22.0], [48.8, 22.0], [48.9, 22.0], [49.0, 22.0], [49.1, 22.0], [49.2, 22.0], [49.3, 22.0], [49.4, 22.0], [49.5, 23.0], [49.6, 23.0], [49.7, 23.0], [49.8, 23.0], [49.9, 23.0], [50.0, 23.0], [50.1, 23.0], [50.2, 23.0], [50.3, 23.0], [50.4, 23.0], [50.5, 23.0], [50.6, 23.0], [50.7, 23.0], [50.8, 23.0], [50.9, 23.0], [51.0, 23.0], [51.1, 23.0], [51.2, 23.0], [51.3, 23.0], [51.4, 23.0], [51.5, 23.0], [51.6, 23.0], [51.7, 23.0], [51.8, 23.0], [51.9, 23.0], [52.0, 23.0], [52.1, 23.0], [52.2, 23.0], [52.3, 23.0], [52.4, 23.0], [52.5, 23.0], [52.6, 23.0], [52.7, 23.0], [52.8, 23.0], [52.9, 23.0], [53.0, 23.0], [53.1, 23.0], [53.2, 23.0], [53.3, 23.0], [53.4, 23.0], [53.5, 23.0], [53.6, 23.0], [53.7, 23.0], [53.8, 23.0], [53.9, 23.0], [54.0, 23.0], [54.1, 23.0], [54.2, 23.0], [54.3, 23.0], [54.4, 24.0], [54.5, 24.0], [54.6, 24.0], [54.7, 24.0], [54.8, 24.0], [54.9, 24.0], [55.0, 24.0], [55.1, 24.0], [55.2, 24.0], [55.3, 24.0], [55.4, 24.0], [55.5, 24.0], [55.6, 24.0], [55.7, 24.0], [55.8, 24.0], [55.9, 24.0], [56.0, 24.0], [56.1, 24.0], [56.2, 24.0], [56.3, 24.0], [56.4, 24.0], [56.5, 24.0], [56.6, 24.0], [56.7, 24.0], [56.8, 24.0], [56.9, 24.0], [57.0, 24.0], [57.1, 24.0], [57.2, 24.0], [57.3, 24.0], [57.4, 24.0], [57.5, 24.0], [57.6, 24.0], [57.7, 24.0], [57.8, 24.0], [57.9, 24.0], [58.0, 24.0], [58.1, 24.0], [58.2, 24.0], [58.3, 24.0], [58.4, 24.0], [58.5, 24.0], [58.6, 24.0], [58.7, 25.0], [58.8, 25.0], [58.9, 25.0], [59.0, 25.0], [59.1, 25.0], [59.2, 25.0], [59.3, 25.0], [59.4, 25.0], [59.5, 25.0], [59.6, 25.0], [59.7, 25.0], [59.8, 25.0], [59.9, 25.0], [60.0, 25.0], [60.1, 25.0], [60.2, 25.0], [60.3, 25.0], [60.4, 25.0], [60.5, 25.0], [60.6, 25.0], [60.7, 25.0], [60.8, 25.0], [60.9, 25.0], [61.0, 25.0], [61.1, 25.0], [61.2, 25.0], [61.3, 25.0], [61.4, 25.0], [61.5, 25.0], [61.6, 25.0], [61.7, 25.0], [61.8, 25.0], [61.9, 25.0], [62.0, 25.0], [62.1, 25.0], [62.2, 25.0], [62.3, 25.0], [62.4, 25.0], [62.5, 25.0], [62.6, 25.0], [62.7, 26.0], [62.8, 26.0], [62.9, 26.0], [63.0, 26.0], [63.1, 26.0], [63.2, 26.0], [63.3, 26.0], [63.4, 26.0], [63.5, 26.0], [63.6, 26.0], [63.7, 26.0], [63.8, 26.0], [63.9, 26.0], [64.0, 26.0], [64.1, 26.0], [64.2, 26.0], [64.3, 26.0], [64.4, 26.0], [64.5, 26.0], [64.6, 26.0], [64.7, 26.0], [64.8, 26.0], [64.9, 26.0], [65.0, 26.0], [65.1, 26.0], [65.2, 26.0], [65.3, 26.0], [65.4, 26.0], [65.5, 26.0], [65.6, 26.0], [65.7, 26.0], [65.8, 26.0], [65.9, 26.0], [66.0, 26.0], [66.1, 26.0], [66.2, 26.0], [66.3, 26.0], [66.4, 26.0], [66.5, 26.0], [66.6, 26.0], [66.7, 26.0], [66.8, 27.0], [66.9, 27.0], [67.0, 27.0], [67.1, 27.0], [67.2, 27.0], [67.3, 27.0], [67.4, 27.0], [67.5, 27.0], [67.6, 27.0], [67.7, 27.0], [67.8, 27.0], [67.9, 27.0], [68.0, 27.0], [68.1, 27.0], [68.2, 27.0], [68.3, 27.0], [68.4, 27.0], [68.5, 27.0], [68.6, 27.0], [68.7, 27.0], [68.8, 27.0], [68.9, 27.0], [69.0, 27.0], [69.1, 27.0], [69.2, 27.0], [69.3, 27.0], [69.4, 27.0], [69.5, 27.0], [69.6, 27.0], [69.7, 27.0], [69.8, 27.0], [69.9, 27.0], [70.0, 27.0], [70.1, 27.0], [70.2, 27.0], [70.3, 27.0], [70.4, 27.0], [70.5, 27.0], [70.6, 28.0], [70.7, 28.0], [70.8, 28.0], [70.9, 28.0], [71.0, 28.0], [71.1, 28.0], [71.2, 28.0], [71.3, 28.0], [71.4, 28.0], [71.5, 28.0], [71.6, 28.0], [71.7, 28.0], [71.8, 28.0], [71.9, 28.0], [72.0, 28.0], [72.1, 28.0], [72.2, 28.0], [72.3, 28.0], [72.4, 28.0], [72.5, 28.0], [72.6, 28.0], [72.7, 28.0], [72.8, 28.0], [72.9, 28.0], [73.0, 28.0], [73.1, 28.0], [73.2, 28.0], [73.3, 28.0], [73.4, 28.0], [73.5, 28.0], [73.6, 28.0], [73.7, 28.0], [73.8, 28.0], [73.9, 29.0], [74.0, 29.0], [74.1, 29.0], [74.2, 29.0], [74.3, 29.0], [74.4, 29.0], [74.5, 29.0], [74.6, 29.0], [74.7, 29.0], [74.8, 29.0], [74.9, 29.0], [75.0, 29.0], [75.1, 29.0], [75.2, 29.0], [75.3, 29.0], [75.4, 29.0], [75.5, 29.0], [75.6, 29.0], [75.7, 29.0], [75.8, 29.0], [75.9, 29.0], [76.0, 29.0], [76.1, 29.0], [76.2, 29.0], [76.3, 29.0], [76.4, 29.0], [76.5, 29.0], [76.6, 29.0], [76.7, 29.0], [76.8, 29.0], [76.9, 30.0], [77.0, 30.0], [77.1, 30.0], [77.2, 30.0], [77.3, 30.0], [77.4, 30.0], [77.5, 30.0], [77.6, 30.0], [77.7, 30.0], [77.8, 30.0], [77.9, 30.0], [78.0, 30.0], [78.1, 30.0], [78.2, 30.0], [78.3, 30.0], [78.4, 30.0], [78.5, 30.0], [78.6, 30.0], [78.7, 30.0], [78.8, 30.0], [78.9, 30.0], [79.0, 30.0], [79.1, 30.0], [79.2, 30.0], [79.3, 30.0], [79.4, 30.0], [79.5, 30.0], [79.6, 30.0], [79.7, 30.0], [79.8, 30.0], [79.9, 30.0], [80.0, 31.0], [80.1, 31.0], [80.2, 31.0], [80.3, 31.0], [80.4, 31.0], [80.5, 31.0], [80.6, 31.0], [80.7, 31.0], [80.8, 31.0], [80.9, 31.0], [81.0, 31.0], [81.1, 31.0], [81.2, 31.0], [81.3, 31.0], [81.4, 31.0], [81.5, 31.0], [81.6, 31.0], [81.7, 31.0], [81.8, 31.0], [81.9, 31.0], [82.0, 31.0], [82.1, 31.0], [82.2, 31.0], [82.3, 31.0], [82.4, 31.0], [82.5, 31.0], [82.6, 31.0], [82.7, 31.0], [82.8, 31.0], [82.9, 32.0], [83.0, 32.0], [83.1, 32.0], [83.2, 32.0], [83.3, 32.0], [83.4, 32.0], [83.5, 32.0], [83.6, 32.0], [83.7, 32.0], [83.8, 32.0], [83.9, 32.0], [84.0, 32.0], [84.1, 32.0], [84.2, 32.0], [84.3, 32.0], [84.4, 32.0], [84.5, 32.0], [84.6, 32.0], [84.7, 32.0], [84.8, 32.0], [84.9, 32.0], [85.0, 32.0], [85.1, 32.0], [85.2, 32.0], [85.3, 33.0], [85.4, 33.0], [85.5, 33.0], [85.6, 33.0], [85.7, 33.0], [85.8, 33.0], [85.9, 33.0], [86.0, 33.0], [86.1, 33.0], [86.2, 33.0], [86.3, 33.0], [86.4, 33.0], [86.5, 33.0], [86.6, 33.0], [86.7, 33.0], [86.8, 33.0], [86.9, 33.0], [87.0, 33.0], [87.1, 33.0], [87.2, 33.0], [87.3, 34.0], [87.4, 34.0], [87.5, 34.0], [87.6, 34.0], [87.7, 34.0], [87.8, 34.0], [87.9, 34.0], [88.0, 34.0], [88.1, 34.0], [88.2, 34.0], [88.3, 34.0], [88.4, 34.0], [88.5, 34.0], [88.6, 34.0], [88.7, 34.0], [88.8, 34.0], [88.9, 34.0], [89.0, 35.0], [89.1, 35.0], [89.2, 35.0], [89.3, 35.0], [89.4, 35.0], [89.5, 35.0], [89.6, 35.0], [89.7, 35.0], [89.8, 35.0], [89.9, 35.0], [90.0, 35.0], [90.1, 35.0], [90.2, 35.0], [90.3, 35.0], [90.4, 36.0], [90.5, 36.0], [90.6, 36.0], [90.7, 36.0], [90.8, 36.0], [90.9, 36.0], [91.0, 36.0], [91.1, 36.0], [91.2, 36.0], [91.3, 36.0], [91.4, 36.0], [91.5, 36.0], [91.6, 37.0], [91.7, 37.0], [91.8, 37.0], [91.9, 37.0], [92.0, 37.0], [92.1, 37.0], [92.2, 37.0], [92.3, 37.0], [92.4, 37.0], [92.5, 37.0], [92.6, 37.0], [92.7, 38.0], [92.8, 38.0], [92.9, 38.0], [93.0, 38.0], [93.1, 38.0], [93.2, 38.0], [93.3, 38.0], [93.4, 38.0], [93.5, 38.0], [93.6, 39.0], [93.7, 39.0], [93.8, 39.0], [93.9, 39.0], [94.0, 39.0], [94.1, 39.0], [94.2, 39.0], [94.3, 40.0], [94.4, 40.0], [94.5, 40.0], [94.6, 40.0], [94.7, 40.0], [94.8, 40.0], [94.9, 40.0], [95.0, 41.0], [95.1, 41.0], [95.2, 41.0], [95.3, 41.0], [95.4, 41.0], [95.5, 41.0], [95.6, 42.0], [95.7, 42.0], [95.8, 42.0], [95.9, 42.0], [96.0, 42.0], [96.1, 43.0], [96.2, 43.0], [96.3, 43.0], [96.4, 43.0], [96.5, 43.0], [96.6, 44.0], [96.7, 44.0], [96.8, 44.0], [96.9, 44.0], [97.0, 45.0], [97.1, 45.0], [97.2, 45.0], [97.3, 46.0], [97.4, 46.0], [97.5, 47.0], [97.6, 47.0], [97.7, 47.0], [97.8, 48.0], [97.9, 48.0], [98.0, 49.0], [98.1, 50.0], [98.2, 51.0], [98.3, 51.0], [98.4, 52.0], [98.5, 54.0], [98.6, 56.0], [98.7, 58.0], [98.8, 64.0], [98.9, 73.0], [99.0, 84.0], [99.1, 102.0], [99.2, 124.0], [99.3, 140.0], [99.4, 170.0], [99.5, 205.0], [99.6, 403.0], [99.7, 680.0], [99.8, 884.0], [99.9, 997.0], [100.0, 4583.0]], "isOverall": false, "label": "GET Category Transactions", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 74311.0, "series": [{"data": [[0.0, 74311.0], [2400.0, 1.0], [600.0, 49.0], [2500.0, 1.0], [3100.0, 1.0], [200.0, 64.0], [800.0, 90.0], [3500.0, 1.0], [900.0, 52.0], [1000.0, 8.0], [4500.0, 1.0], [1100.0, 4.0], [1200.0, 50.0], [300.0, 25.0], [100.0, 294.0], [400.0, 45.0], [2000.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "GET Category Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 197.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 42455.0, "series": [{"data": [[0.0, 32348.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 197.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 42455.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 28.849518426035296, "minX": 1.74116268E12, "maxY": 42.503306792540954, "series": [{"data": [[1.74116268E12, 28.849518426035296], [1.74116274E12, 42.503306792540954]], "isOverall": false, "label": "Category Transactions Load Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74116274E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2.59681697612732, "minX": 1.0, "maxY": 61.56898656898646, "series": [{"data": [[2.0, 2.619834710743804], [3.0, 2.59681697612732], [4.0, 2.930022573363432], [5.0, 3.9046793760831897], [6.0, 4.376923076923076], [7.0, 6.018547140649151], [8.0, 6.443496801705761], [9.0, 6.345622119815674], [10.0, 9.265853658536576], [11.0, 12.974770642201834], [12.0, 9.477638640429328], [13.0, 8.798339264531423], [14.0, 9.861305361305348], [15.0, 12.561797752808983], [16.0, 10.260416666666687], [17.0, 10.676760030280096], [18.0, 12.254645560908463], [19.0, 16.82546036829463], [20.0, 13.468858131487886], [21.0, 13.582684824902703], [22.0, 13.306313993174063], [23.0, 15.887945670628195], [24.0, 18.93565331582401], [25.0, 15.701269604182206], [26.0, 19.645658263305318], [27.0, 17.529734675205862], [28.0, 19.78394534585822], [29.0, 20.38560411311054], [30.0, 20.418524871355064], [31.0, 24.75804878048781], [32.0, 20.967558338076255], [33.0, 21.866744593804828], [34.0, 25.554147465437794], [35.0, 28.173295454545443], [36.0, 22.59946476360395], [37.0, 24.123621323529417], [38.0, 22.611546391752587], [39.0, 20.97393767705385], [40.0, 21.70238095238096], [41.0, 23.57528786536756], [42.0, 24.675929549902097], [43.0, 23.927137546468398], [44.0, 25.67069701280229], [45.0, 26.13589567604669], [46.0, 30.866855524079313], [47.0, 28.713883299798816], [48.0, 32.21381193913382], [49.0, 59.633938836514275], [50.0, 34.38915254237291], [51.0, 33.5492662473795], [52.0, 56.587948874011005], [53.0, 61.56898656898646], [54.0, 35.21266032271414], [55.0, 41.87531899380242], [56.0, 39.026540284360266], [1.0, 2.9298245614035077]], "isOverall": false, "label": "GET Category Transactions", "isController": false}, {"data": [[35.868840000000205, 26.787626666666757]], "isOverall": false, "label": "GET Category Transactions-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 56.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 64936.3, "minX": 1.74116268E12, "maxY": 9709865.616666667, "series": [{"data": [[1.74116268E12, 9626375.0], [1.74116274E12, 9709865.616666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74116268E12, 64936.3], [1.74116274E12, 64956.21666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74116274E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 18.785912246521992, "minX": 1.74116268E12, "maxY": 34.35062375184757, "series": [{"data": [[1.74116268E12, 18.785912246521992], [1.74116274E12, 34.35062375184757]], "isOverall": false, "label": "GET Category Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74116274E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5.429986554345154, "minX": 1.74116268E12, "maxY": 19.445496278237417, "series": [{"data": [[1.74116268E12, 5.429986554345154], [1.74116274E12, 19.445496278237417]], "isOverall": false, "label": "GET Category Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74116274E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 13.833438520429187, "minX": 1.74116268E12, "maxY": 17.239852685634045, "series": [{"data": [[1.74116268E12, 13.833438520429187], [1.74116274E12, 17.239852685634045]], "isOverall": false, "label": "GET Category Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74116274E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.74116268E12, "maxY": 1000.0, "series": [{"data": [[1.74116268E12, 298.0], [1.74116274E12, 1000.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74116268E12, 1.0], [1.74116274E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74116268E12, 17.0], [1.74116274E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74116268E12, 31.0], [1.74116274E12, 680.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74116268E12, 11.0], [1.74116274E12, 27.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74116268E12, 20.0], [1.74116274E12, 49.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74116274E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 455.0, "maxY": 1212.0, "series": [{"data": [[538.0, 30.0], [627.0, 26.0], [640.0, 33.0], [761.0, 29.0], [752.0, 243.0], [1015.0, 30.0], [1069.0, 3.0], [1128.0, 7.0], [1129.0, 8.0], [1095.0, 88.0], [1186.0, 5.0], [1190.0, 198.0], [1231.0, 164.0], [1216.0, 27.0], [1331.0, 13.0], [1336.0, 33.0], [1297.0, 508.5], [1384.0, 9.0], [1390.0, 17.0], [1467.0, 10.0], [1510.0, 10.0], [1478.0, 15.0], [1485.0, 35.0], [1486.0, 27.0], [1530.0, 43.0], [1575.0, 12.0], [1537.0, 13.0], [1576.0, 27.0], [1583.0, 25.0], [1564.0, 463.0], [1751.0, 25.0], [1791.0, 22.0], [1854.0, 19.0], [455.0, 29.0], [474.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[538.0, 1001.5], [640.0, 1212.0], [752.0, 5.0], [1095.0, 16.0], [1190.0, 39.0], [1231.0, 26.0], [1223.0, 17.0], [1317.0, 21.0], [1321.0, 37.0], [1332.0, 41.0], [1297.0, 10.0], [1390.0, 10.0], [1369.0, 19.0], [1418.0, 22.0], [1469.0, 31.0], [1414.0, 36.0], [1435.0, 17.0], [1523.0, 22.0], [1478.0, 27.0], [1504.0, 28.0], [1485.0, 31.0], [1519.0, 23.0], [1530.0, 20.0], [1539.0, 33.0], [1564.0, 22.0], [1577.0, 20.0], [1626.0, 23.0], [1655.0, 32.0], [1703.0, 23.0], [1723.0, 23.0], [1690.0, 23.0], [1734.0, 21.0], [1854.0, 19.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1854.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 455.0, "maxY": 1212.0, "series": [{"data": [[538.0, 30.0], [627.0, 26.0], [640.0, 33.0], [761.0, 29.0], [752.0, 241.0], [1015.0, 30.0], [1069.0, 3.0], [1128.0, 7.0], [1129.0, 8.0], [1095.0, 80.0], [1186.0, 5.0], [1190.0, 198.0], [1231.0, 162.0], [1216.0, 27.0], [1331.0, 13.0], [1336.0, 33.0], [1297.0, 508.5], [1384.0, 9.0], [1390.0, 17.0], [1467.0, 10.0], [1510.0, 10.0], [1478.0, 15.0], [1485.0, 35.0], [1486.0, 27.0], [1530.0, 39.0], [1575.0, 12.0], [1537.0, 13.0], [1576.0, 27.0], [1583.0, 24.0], [1564.0, 461.0], [1751.0, 25.0], [1791.0, 22.0], [1854.0, 19.0], [455.0, 29.0], [474.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[538.0, 1001.5], [640.0, 1212.0], [752.0, 0.0], [1095.0, 0.0], [1190.0, 0.0], [1231.0, 0.0], [1223.0, 0.0], [1317.0, 0.0], [1321.0, 0.0], [1332.0, 0.0], [1297.0, 0.0], [1390.0, 0.0], [1369.0, 0.0], [1418.0, 0.0], [1469.0, 0.0], [1414.0, 0.0], [1435.0, 0.0], [1523.0, 0.0], [1478.0, 0.0], [1504.0, 0.0], [1485.0, 0.0], [1519.0, 0.0], [1530.0, 0.0], [1539.0, 0.0], [1564.0, 0.0], [1577.0, 0.0], [1626.0, 0.0], [1655.0, 0.0], [1703.0, 0.0], [1723.0, 0.0], [1690.0, 0.0], [1734.0, 0.0], [1854.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1854.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 608.1833333333333, "minX": 1.74116268E12, "maxY": 641.8166666666667, "series": [{"data": [[1.74116268E12, 608.1833333333333], [1.74116274E12, 641.8166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74116274E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 271.7, "minX": 1.74116268E12, "maxY": 370.8333333333333, "series": [{"data": [[1.74116268E12, 271.7], [1.74116274E12, 271.78333333333336]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74116268E12, 335.68333333333334], [1.74116274E12, 370.8333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74116274E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 270.8, "minX": 1.74116268E12, "maxY": 371.81666666666666, "series": [{"data": [[1.74116268E12, 271.6166666666667], [1.74116274E12, 270.8]], "isOverall": false, "label": "GET Category Transactions-success", "isController": false}, {"data": [[1.74116268E12, 335.76666666666665], [1.74116274E12, 371.81666666666666]], "isOverall": false, "label": "GET Category Transactions-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74116274E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 270.8, "minX": 1.74116268E12, "maxY": 371.81666666666666, "series": [{"data": [[1.74116268E12, 271.6166666666667], [1.74116274E12, 270.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74116268E12, 335.76666666666665], [1.74116274E12, 371.81666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74116274E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

