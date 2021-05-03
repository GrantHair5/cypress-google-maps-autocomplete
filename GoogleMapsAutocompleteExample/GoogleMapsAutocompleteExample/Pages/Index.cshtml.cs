using GoogleMapsAutocompleteExample.Config;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace GoogleMapsAutocompleteExample.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IOptions<GmapsApiSecrets> _gmapsApiSecrets;

        public IndexModel(ILogger<IndexModel> logger, IOptions<GmapsApiSecrets> gmapsApiSecrets)
        {
            _logger = logger;
            _gmapsApiSecrets = gmapsApiSecrets;
        }

        [BindProperty]
        public string GmapsApiKey { get; set; }

        public void OnGet()
        {
            GmapsApiKey = _gmapsApiSecrets.Value.ApiKey;
        }
    }
}