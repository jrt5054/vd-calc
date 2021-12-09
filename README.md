## Voltage Drop Calculator

This project is a web-based calculator that utilizes the calculation for voltage drop as specified in Chapter 9 Table 9 of the 2017 National Electric Code (NEC). It takes the input data from the form (specified below) and applies it to the following formulas.

### Input Data

- **Wire Tag** - This is strictly for administrative purposes and has no effect on the output.
- **Electrical Load** - This is the number of units (Amps, Watts, or Volt-Amps) that the circuit is carrying to the load.
- **Load Type** - This is the type of units that are being used to specify the load that the circuit is carrying. They can be Amps, Watts, or Volt-Amps.
- **Power Factor** - This is the power factor of the circuit. This number can vary based on the type of load the circuit is connected to but is typically around 0.85 - 0.95.
- **Voltage** - This is the voltage of the circuit. Possible single phase voltages are 120V, 208V, 277V, and 480V. Possible three phase voltages are 208V and 480V.
- **Number of Phases** - This defines the nmber of phases of the system. This calculator only accepts either single phase or three phase systems (which accound for the vast majority of electrical systems in the United States).
- **Conductor Material** - This is the metal used for the conductor. It can either be Copper or Aluminum.
- **Conduit Material** - This is the material used for the conduit that the circuit is run through. It can either be Steel, Aluminum, or Polyvinyl chloride (PVC).
- **Number of Parallel Runs** - This is teh number of parallel runs of the circuit. Many circuits utilize more than one set of wires per phase to feed the load.
- **Wire Size** - This is the size of the conductors that are feeding the load. They are measured in American Wire Gauge (AWG).
- **Wire Length** - This is the Wire Length measured in feet. This is the full length of the wire, not just a straight line distance.

### Calculations

*Voltage Drop*

VD<sub>1</sub>  = Z<sub>e</sub> * (L/1000) * I * 2 / PR

VD<sub>3</sub>  = Z<sub>e</sub> * (L/1000) * I * 1.73 / PR

*Impedance*

Z<sub>e</sub> = (R * cos(cos<sup>-1</sup>(PF))) + (X<sub>L</sub> * sin(cos<sup>-1</sup>(PF)))

*Current* <br>
Load type - Amps
- If amps is selected from the Load Type drop down menu, then that value is directly used by the voltage drop calculation. This does not change based on the voltage or number of phases.

Load type - Watts, 
- (Single Phase) Amps = Watts / (Voltage * PF)
- (Three Phase) Amps = Watts / (Voltage * PF * 1.73)

Load type - Volt-Amps, 
- (Single Phase) Amps = Volt-Amps / Voltage
- (Three Phase) Amps = Volt-Amps / (Voltage * 1.73)

*Calculation Abbreviations*

- **VD<sub>1</sub>** - Voltage Drop (V) for a single phase system. 
- **VD<sub>3</sub>** - Voltage Drop (V) for a three phase system.
- **Z<sub>e</sub>** - Effective impedance
- **R** - Resistance.  This is the AC resistance of the wire based on the wire size, conductor material and the conduit material. It is measured in Ohms to Neutral per 1000ft. These values are taken directly from Chapter 9 Table 9
- **X<sub>L</sub>** - Reactance. This is the reactance of the wire based on the wire size and the conduit material. It is measured in Ohms to Neutral per 1000ft. These values are taken directly from Chapter 9 Table 9.
- **PF** - Power Factor of the circuit load. 
- **L** - Wire Length measured in feet. 
- **I** - Load of circuit measured in Amperes (Amps). The calculator can take several load types (Amps, Watts, Volt-Amps) and will automatically calculate the number of Amps.
- **PR** - Number of Parallel Runs
- **1.73** - This is the square root of 3.


## Motivation

I thought this would be a good project to tackle as it is a calculation that needs to be run on every wire in a project which can be quite numerous. Having a tool to make performing the calculations more efficient can save a substantial amount of time. 


## Tech/framework used

<b>Built with</b>
- [React](https://reactjs.org/)


## How to use?

Simply fill in all form fields and click submit. This can be done as many times as is necessary. If you want to delete a line item, simply click on the X in the corner.

## Credits

The National Electric Code (2017)