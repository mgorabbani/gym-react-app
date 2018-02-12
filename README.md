# Gym Management Application
database

tenants
    company_name
    owner_name
    email
    phone_number
    package_list
    trainer_add
members
    name
    phone
    email
    address
    gender
    extra note
    package
    trainer_assigned
    associated_tenant
    joining_date
    workout_items[day_one:{1,2,3,8},day_two:{6,7,9,12,14}...]
    food_chart:Text
trainer
    name
    phone
    email
    address
    associated_tenant:_id(tenants)
    assigned_members: [_id(members), _id(members),_id(members)...]

shared_table
    workout_items [pushups,dumbell row, etc]


attendace
