import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function getFormulaOneDrivers(){
    try {
        const response = await fetch('https://www.formula1.com/en/drivers.html');
        const body = await response.text();
        const $ = cheerio.load(body);

        // const wrapper = $('.listing-items--wrapper')
        // console.log(wrapper.length);

        const items = [];
        $('.listing-items--wrapper > .row > .col-12')
        .map((i, el) => {
            const rank = $(el).find('.rank').text();
            const points = $(el).find('.points > .f1-wide--s').text();
            console.log(points);
        })


    } catch (error) {
        console.log(error);
    }
}

getFormulaOneDrivers();