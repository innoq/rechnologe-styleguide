module ComponentHelper

  def progress_bar_tag(value:, max:, modifier: nil)
    label = yield if block_given?
    label ||= value / max unless max == 0
    label ||= '0'

    label_tag class: "progress-bar #{modifier}" do
      content_tag :progress, label, value: value, max: max
    end
  end

end
