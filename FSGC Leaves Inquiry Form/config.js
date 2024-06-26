const hr_contact_name = 'Angela';
const hr_contact_medium = 'Workplace Chat';

const email_sender_name = 'Five Story HR';

const leaves_tracker_spreadsheet_id = '1DXAy_SUTnTX_No1R42MPIBiBtRKuK5D4lR0cXvFLZhM';
const leaves_tracker_sheet_name = 'Leaves Tracker';
const leaves_tracker_start_row = 7;

const leaves_tracker_reference_date_cell = 'A2';

const leaves_tracker_columns = {
  'id_number':                            0,
  'work_email':                           1,
  'full_name':                            2,
  'employment_type':                      3,
  'start_date':                           4,
  'tenure':                               5,
  'used_vacation_leaves_year':            6,
  'used_vacation_leaves_h1':              7,
  'used_vacation_leaves_h2':              8,
  'used_sick_leaves':                     9,
  'used_birthday_leaves':                 10,
  'used_mental_health_leaves':            11,
  'used_offset_leaves':                   12,
  'used_maternity_leaves':                13,
  'used_paternity_leaves':                14,
  'used_bereavement_leaves':              15,
  'used_leave_with_pay_for_vawc':         16,
  'used_parental_leave_for_solo_parents': 17, 
  'used_special_leave_for_women':         18,
  'total_used_leaves':                    19,
  'remaining_vacation_leaves_year':       20,
  'remaining_vacation_leaves_h1':         21,
  'remaining_vacation_leaves_h2':         22,
  'remaining_sick_leaves':                23,
  'remaining_birthday_leaves':            24,
  'remaining_mental_health_leaves':       25,
  'total_remaining_leaves':               26
};

const leaves_inquiry_spreadsheet_id = '1V0P8b6BWJZQ4YZWmKSU-4LKu5wRscnVD3wIzAc4iy4A';
const leaves_inquiry_sheet_name = 'Form Responses 1';
const leaves_inquiry_start_row = 2;

const leaves_inquiry_form_id = '1NNgTrV6eCI2QoVDu6mhJBn9LSyXNz8yAxnERjVaQ_hA';

const leaves_inquiry_form_name = 'FSGC Leaves Inquiry'
const leaves_inquiry_form_link = 'https://forms.gle/coFFhge7rFuLVfCs5';

const leaves_inquiry_columns = {
  'timestamp':      0,
  'email_address':  1
};

const leaves_inquiry_form_response_trigger = "leaves_inquiry_form_response";

const developer_mode = false;
const developer_email = 'marcobeles20@gmail.com';
const developer_mode_work_email = 'angela@fivestorygroup.com';