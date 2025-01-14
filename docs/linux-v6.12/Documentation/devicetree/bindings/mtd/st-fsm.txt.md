---
sidebar_position: 50
---
# st-fsm.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/mtd/st-fsm.txt`

### コンテンツ

```txt
* ST-Microelectronics SPI FSM Serial (NOR) Flash Controller

Required properties:
  - compatible : Should be "st,spi-fsm"
  - reg        : Contains register's location and length.
  - reg-names  : Should contain the reg names "spi-fsm"
  - interrupts : The interrupt number
  - pinctrl-0  : Standard Pinctrl phandle (see: pinctrl/pinctrl-bindings.txt)

Optional properties:
  - st,syscfg          : Phandle to boot-device system configuration registers
  - st,boot-device-reg : Address of the aforementioned boot-device register(s)
  - st,boot-device-spi : Expected boot-device value if booted via this device

Example:
	spifsm: spifsm@fe902000{
	        compatible         = "st,spi-fsm";
	        reg                =  <0xfe902000 0x1000>;
	        reg-names          = "spi-fsm";
	        pinctrl-0          = <&pinctrl_fsm>;
		st,syscfg	   = <&syscfg_rear>;
	        st,boot-device-reg = <0x958>;
	        st,boot-device-spi = <0x1a>;
	};


```
