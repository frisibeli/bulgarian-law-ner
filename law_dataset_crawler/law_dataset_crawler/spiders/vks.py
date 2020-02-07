from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor


class VksSpider(CrawlSpider):
    name = 'vks'
    allowed_domains = ['vks.bg']
    start_urls = ['http://domino.vks.bg/bcap/scc/webdata.nsf/index']
    
    rules = [
        Rule(
            LinkExtractor(
                allow=("/Keywords/.*")
            ), 
            callback='parse_court_report', 
        ),
        Rule(
            LinkExtractor(
                restrict_css=("a")
            ),
            follow=True
        )
    ]

    def parse_court_report(self, response):
        print('Parse '+response.url)
        return {
            'name':response.url,
            'text':response.css('body').get()
        }
