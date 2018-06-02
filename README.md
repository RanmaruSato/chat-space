## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|member_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :messages
- has_many :members, through: :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|string|null: false|
|member_id|integer|null: false, foreign_key: true|



### Association
- belongs_to :group
- belongs_to :user
- has_many :members,through: :user_groups

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false,unique: true|
|password|string|null: false|
|member_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :messages
- has_many :members,through: :members

