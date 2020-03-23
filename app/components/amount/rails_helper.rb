module ComponentHelper

  def amount_tag(amount, currency:, locale: I18n.locale)
    content_tag :span, amount, class: 'amount', data: {currency: currency}
  end
  
end

