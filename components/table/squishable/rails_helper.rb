module ComponentHelper

  def squishable_tag(label, short, squish_at: nil)
    squish = squish_at || "#{label.length}ch"

    content_tag :span, label, class: 'squishable', 'aria-label': label, data: {short: short}, style: "--squish-at: #{squish}"
  end
end
