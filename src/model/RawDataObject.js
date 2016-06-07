/**
 * Created by lukas on 03.06.2016.
 */

export default class RawDataObject {
    constructor(id, campaign, channel, clicks, impressions) {
        this.id = id;
        this.campaign = campaign;
        this.channel = channel;
        this.clicks = clicks;
        this.impressions = impressions;
    }
}

