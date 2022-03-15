import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar, FormInputLabel, GroupContainer, StyledErrorMessage } from './date-picker.styles';
import addDays from 'date-fns/addDays';
import useMedia from 'use-media';
import { useField, useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

const ReactDatePicker = ({ name, name2, booked, dayOnly }) => {
	const date = new Date();
	const dateValid = new Date();
	date.setDate(date.getDate() + 1);
	dateValid.setDate(date.getDate() + 1);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(date);
	const [focusStart, setFocusStart] = useState(false);
	const [focusEnd, setFocusEnd] = useState(false);
	const isMobile = useMedia({ maxWidth: '900px' });

	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField({ name: name, value: startDate });
	const [field2, meta2] = useField({ name: name2, value: endDate });

	function WithoutTime(dateTime) {
		var date = new Date(dateTime.getTime());
		date.setHours(0, 0, 0, 0);
		return date;
	}

	// const bookedDates = [new Date('2021-05-20'), new Date('2021-05-21'), new Date('2021-05-22')];
	const bookedDates = booked;

	//disables booked dates and sets a range limit of 5 days
	const shouldDisableDates = () => {
		let arr = [];
		for (let i = 0; i <= 10; i++) {
			startDate
				? arr.push(addDays(WithoutTime(startDate), i))
				: arr.push(addDays(WithoutTime(new Date()), i));
		}
		let chooseDays = arr.map((item) => item.getTime());
		let bookedDays = bookedDates.map((item) => WithoutTime(item).getTime());

		if (chooseDays.map((e) => bookedDays.includes(e)).some((e) => e === true)) {
			return new Date(chooseDays.filter((e) => bookedDays.includes(e)).sort()[0]);
		} else {
			return startDate ? addDays(startDate, 10) : addDays(new Date(), 10);
		}
	};

	const onlyWeekly = () => {
		if (startDate.getMonth() === (6 || 7)) {
			return addDays(startDate, 7);
		}
		return startDate;
	};
	const onlyDay = () => {
		return addDays(startDate, 1);
	};

	useEffect(() => {
		if (dayOnly) {
			setEndDate(addDays(startDate, 1));
			setFieldValue(field2.name, addDays(startDate, 1));
		}
	}, [dayOnly, startDate, field2.name, setFieldValue]);

	return (
		<Calendar>
			<GroupContainer>
				<FormInputLabel focus={focusStart} className={startDate ? 'shrink' : ''}>
					Anreisedatum
				</FormInputLabel>
				<DatePicker
					{...field}
					// {...props}
					onFocus={() => setFocusStart(true)}
					onCalendarClose={() => setFocusStart(false)}
					selected={(field.value && new Date(field.value)) || null}
					onChange={(val) => {
						setStartDate(val);
						setFieldValue(field.name, val);
					}}
					dateFormat="dd.MM.yyyy"
					selectsStart={!dayOnly}
					startDate={startDate}
					endDate={!dayOnly ? endDate : startDate}
					minDate={!dayOnly ? new Date() : dateValid}
					excludeDates={bookedDates}
					withPortal={isMobile}
				/>
				{meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
			</GroupContainer>
			{!dayOnly && (
				<GroupContainer>
					<FormInputLabel focus={focusEnd} className={endDate ? 'shrink' : ''}>
						Abreisedatum
					</FormInputLabel>
					<DatePicker
						{...field2}
						// {...props}
						onFocus={() => setFocusEnd(true)}
						onCalendarClose={() => setFocusEnd(false)}
						// selected={endDate}
						selected={(field2.value && new Date(field2.value)) || null}
						onChange={(val) => {
							setEndDate(val);
							setFieldValue(field2.name, val);
						}}
						dateFormat="dd.MM.yyyy"
						// onChange={(date) => setEndDate(date)}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						minDate={!dayOnly ? onlyWeekly() : onlyDay()}
						maxDate={!dayOnly ? shouldDisableDates() : onlyDay()}
						excludeDates={bookedDates}
						withPortal={isMobile}
					/>
					{meta2.touched && meta2.error ? (
						<StyledErrorMessage>{meta2.error}</StyledErrorMessage>
					) : null}
				</GroupContainer>
			)}
		</Calendar>
	);
};

export default ReactDatePicker;
