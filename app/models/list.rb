# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_lists_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class List < ApplicationRecord
  belongs_to :user
  
  has_many :watchlist_items, dependent: :destroy
  has_many :movies, through: :watchlist_items

  validates :name, presence: true, length: { minimum: 3 }
end
