import {
    Injectable
} from '@angular/core';

import {ApperyioChart, aioInitChartObject, aioObject, aioEventOptions, aioLabelsType, aioDatasetType} from './apperyio_chart';

@Injectable()
export class ChartHelperService {
    initChartComponent(component: ApperyioChart, chartConfig?: aioInitChartObject, joinWithConfig?:boolean) {
        component.initChart(chartConfig, joinWithConfig);
    }

    destroyChartComponent(component: ApperyioChart) {
        component.destroyChart();
    }

    updateChartComponent(component: ApperyioChart, callback: Function) {
        component.updateChart(callback);
    }
    //---------------------- Update Options ------------------------------
    updateChartOptionsComponent(component: ApperyioChart, options: any) {
        component.updateChartOptions(options);
    }

    resetChartOptionsComponent(component: ApperyioChart, options: any) {
        component.resetChartOptions(options);
    }
    //---------------------- Update Labels -------------------------------
    addChartLabelsComponent(component: ApperyioChart, labels: aioLabelsType, options: aioEventOptions) {
        component.addChartLabels(labels, options);
    }    

    updateChartLabelsComponent(component: ApperyioChart, labels: aioLabelsType, options: aioEventOptions) {
        component.updateChartLabels(labels, options);
    }

    removeChartLabelsComponent(component: ApperyioChart, options: aioEventOptions) {
        component.removeChartLabels(options);
    }
    //---------------------- Update Datasets -----------------------------
    addChartDatasetsComponent(component: ApperyioChart, options: aioObject) {
        component.addChartDatasets(options);
    }

    updateChartDatasetsComponent(component: ApperyioChart, options: aioObject) {
        component.updateChartDatasets(options);
    }    

    removeChartDatasetsComponent(component: ApperyioChart, options: aioObject) {
        component.removeChartDatasets(options);
    }
    //---------------------- Update Label --------------------------------
    addChartLabelComponent(component: ApperyioChart, label: aioLabelsType, options: aioEventOptions) {
        component.addChartMultilineLabel(label, options);
    }

    updateChartLabelComponent(component: ApperyioChart, label: aioLabelsType, options: aioEventOptions) {
        component.updateChartMultilineLabel(label, options);
    }

    removeChartLabelComponent(component: ApperyioChart, options: aioEventOptions) {
        component.removeChartMultilineLabel(options);
    }
    //---------------------- Update Dataset Data -------------------------
    addChartDatasetDataComponent(component: ApperyioChart, datasetData: aioDatasetType, options?: aioEventOptions) {
        component.addChartDatasetData(datasetData, options);
    }    

    updateChartDatasetDataComponent(component: ApperyioChart, datasetData: aioDatasetType, options?: aioEventOptions) {
        component.updateChartDatasetData(datasetData, options);
    }

    removeChartDatasetDataComponent(component: ApperyioChart, options: aioEventOptions) {
        component.removeChartDatasetData(options);
    }
}