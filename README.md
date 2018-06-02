# readmeにDB設計内容を記載

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|member_id|references|null: false, foreign_key: true|

### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|member_id|references|null: false, foreign_key: true|



### Association
- belongs_to :group,through: :members
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false,unique: true|
|password|string|null: false|
|member_id|references|null: false, foreign_key: true|

### Association
- has_many :groups,through: :members
- has_many :messages
- has_many :members

