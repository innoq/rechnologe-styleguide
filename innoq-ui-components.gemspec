$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "innoq/ui/components/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = "innoq-ui-components"
  spec.version     = Innoq::Ui::Components::VERSION
  spec.authors     = ["Joy Clark", "Lucas Dohmen", "Willem van Kerkhof"]
  spec.email       = ["joy.clark@innoq.com", "lucas@dohmen.io", "wvk@innoq.com"]
  spec.homepage    = "https://innoq.com"
  spec.summary     = "Collection of innoQ UI components"
  spec.description = "innoQ UI components for use in internal applications"
  spec.license     = "MIT"

#   # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
#   # to allow pushing to a single host or delete this section to allow pushing to any host.
#   if spec.respond_to?(:metadata)
#     spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
#   else
#     raise "RubyGems 2.0 or newer is required to protect against " \
#       "public gem pushes."
#   end

  spec.files = Dir["{app,config,lib}/**/*.rb", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", ">= 5.0.0"
end
