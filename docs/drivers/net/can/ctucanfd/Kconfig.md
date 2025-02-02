---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/ctucanfd/Kconfig`

### コンテンツ

```txt
config CAN_CTUCANFD
	tristate "CTU CAN-FD IP core" if COMPILE_TEST
	help
	  This driver adds support for the CTU CAN FD open-source IP core.
	  More documentation and core sources at project page
	  (https://gitlab.fel.cvut.cz/canbus/ctucanfd_ip_core).
	  The core integration to Xilinx Zynq system as platform driver
	  is available (https://gitlab.fel.cvut.cz/canbus/zynq/zynq-can-sja1000-top).
	  Implementation on Intel FPGA-based PCI Express board is available
	  from project (https://gitlab.fel.cvut.cz/canbus/pcie-ctucanfd) and
	  on Intel SoC from project (https://gitlab.fel.cvut.cz/canbus/intel-soc-ctucanfd).
	  Guidepost CTU FEE CAN bus projects page https://canbus.pages.fel.cvut.cz/ .

config CAN_CTUCANFD_PCI
	tristate "CTU CAN-FD IP core PCI/PCIe driver"
	depends on PCI
	select CAN_CTUCANFD
	help
	  This driver adds PCI/PCIe support for CTU CAN-FD IP core.
	  The project providing FPGA design for Intel EP4CGX15 based DB4CGX15
	  PCIe board with PiKRON.com designed transceiver riser shield is available
	  at https://gitlab.fel.cvut.cz/canbus/pcie-ctucanfd .

config CAN_CTUCANFD_PLATFORM
	tristate "CTU CAN-FD IP core platform (FPGA, SoC) driver"
	depends on HAS_IOMEM && OF
	select CAN_CTUCANFD
	help
	  The core has been tested together with OpenCores SJA1000
	  modified to be CAN FD frames tolerant on MicroZed Zynq based
	  MZ_APO education kits designed by Petr Porazil from PiKRON.com
	  company. FPGA design https://gitlab.fel.cvut.cz/canbus/zynq/zynq-can-sja1000-top.
	  The kit description at the Computer Architectures course pages
	  https://cw.fel.cvut.cz/wiki/courses/b35apo/documentation/mz_apo/start .

```
