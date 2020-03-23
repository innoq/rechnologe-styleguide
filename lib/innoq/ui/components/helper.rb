$:.push File.expand_path("../../../../app", __dir__)

%w(amount button-group icon main-layout page-category navbar progress-bar squishable tabelle tabelle-toggler table table-responsive).each do |component|
#   puts "Trying to load component #{component}"
  require "components/#{component}/rails_helper"
end

puts "loaded all components."

module Innoq
  module Ui
    module Components
      module Helper

      end
    end
  end
end

