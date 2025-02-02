---
sidebar_position: 18
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/mellanox/mlxsw/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Mellanox switch drivers configuration
#

config MLXSW_CORE
	tristate "Mellanox Technologies Switch ASICs support"
	select NET_DEVLINK
	select MLXFW
	select AUXILIARY_BUS
	help
	  This driver supports Mellanox Technologies Switch ASICs family.

	  To compile this driver as a module, choose M here: the
	  module will be called mlxsw_core.

config MLXSW_CORE_HWMON
	bool "HWMON support for Mellanox Technologies Switch ASICs"
	depends on MLXSW_CORE && HWMON
	depends on !(MLXSW_CORE=y && HWMON=m)
	default y
	help
	  Say Y here if you want to expose HWMON interface on mlxsw devices.

config MLXSW_CORE_THERMAL
	bool "Thermal zone support for Mellanox Technologies Switch ASICs"
	depends on MLXSW_CORE && THERMAL
	default y
	help
	 Say Y here if you want to automatically control fans speed according
	 ambient temperature reported by ASIC.

config MLXSW_PCI
	tristate "PCI bus implementation for Mellanox Technologies Switch ASICs"
	depends on PCI && HAS_IOMEM && MLXSW_CORE
	select PAGE_POOL
	default m
	help
	  This is PCI bus implementation for Mellanox Technologies Switch ASICs.

	  To compile this driver as a module, choose M here: the
	  module will be called mlxsw_pci.

config MLXSW_I2C
	tristate "I2C bus implementation for Mellanox Technologies Switch ASICs"
	depends on I2C && MLXSW_CORE
	default m
	help
	  This is I2C bus implementation for Mellanox Technologies Switch ASICs.

	  To compile this driver as a module, choose M here: the
	  module will be called mlxsw_i2c.

config MLXSW_SPECTRUM
	tristate "Mellanox Technologies Spectrum family support"
	depends on MLXSW_CORE && MLXSW_PCI && NET_SWITCHDEV && VLAN_8021Q
	depends on PSAMPLE || PSAMPLE=n
	depends on BRIDGE || BRIDGE=n
	depends on IPV6 || IPV6=n
	depends on NET_IPGRE || NET_IPGRE=n
	depends on IPV6_GRE || IPV6_GRE=n
	depends on VXLAN || VXLAN=n
	depends on PTP_1588_CLOCK_OPTIONAL
	select GENERIC_ALLOCATOR
	select PARMAN
	select OBJAGG
	select NET_PTP_CLASSIFY if PTP_1588_CLOCK
	default m
	help
	  This driver supports Mellanox Technologies
	  Spectrum/Spectrum-2/Spectrum-3/Spectrum-4 Ethernet Switch ASICs.

	  To compile this driver as a module, choose M here: the
	  module will be called mlxsw_spectrum.

config MLXSW_SPECTRUM_DCB
	bool "Data Center Bridging (DCB) support"
	depends on MLXSW_SPECTRUM && DCB
	default y
	help
	  Say Y here if you want to use Data Center Bridging (DCB) in the
	  driver.

config MLXSW_MINIMAL
	tristate "Mellanox Technologies minimal I2C support"
	depends on MLXSW_CORE && MLXSW_I2C
	default m
	help
	  This driver supports I2C access for Mellanox Technologies Switch
	  ASICs.

	  To compile this driver as a module, choose M here: the
	  module will be called mlxsw_minimal.

```
