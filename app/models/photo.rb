class Photo < ApplicationRecord
  has_many :characters
  has_many :scores

  def source
    url
  end
end
