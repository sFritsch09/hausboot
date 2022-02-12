import React from 'react';
import { MenuItem, FormLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { makeStyles } from '@mui/styles';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import { GroupContainer, StyledErrorMessage } from './forms-ui.styles';

const SelectWrapper = ({ name, options, label, ...otherProps }) => {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (evt) => {
		const { value } = evt.target;
		setFieldValue(name, value);
	};
	const theme = useTheme({
		overrides: {
			MuiPaper: {
				root: {
					color: 'white',
				},
			},
		},
	});

	const useStyles = makeStyles(() => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
		root: {
			backgroundColor: 'red',
		},
		list: {
			backgroundColor: '#424242',
			color: 'white',
		},
	}));
	const classes = useStyles();
	const configSelect = {
		...field,
		...otherProps,
		select: 'true',
		variant: 'standard',
		fullWidth: true,
		onChange: handleChange,
	};
	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}
	return (
		<ThemeProvider theme={theme}>
			<GroupContainer>
				<FormLabel component="legend">{label}</FormLabel>
				<Select {...configSelect} MenuProps={{ classes: { list: classes.list } }}>
					{options.map((item, pos) => {
						return (
							<MenuItem
								key={pos}
								value={item}
								// classes={{
								// 	list: classes.list,
								// }}
							>
								{options[item]}
							</MenuItem>
						);
					})}
				</Select>
				{meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
			</GroupContainer>
		</ThemeProvider>
	);
};

export default SelectWrapper;
