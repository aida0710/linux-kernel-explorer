---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vc04_services/vchiq-mmal/Kconfig`

### コンテンツ

```txt
config BCM2835_VCHIQ_MMAL
	tristate "BCM2835 MMAL VCHIQ service"
	depends on BCM2835_VCHIQ
	help
	  Enables the MMAL API over VCHIQ interface as used for the
	  majority of the multimedia services on VideoCore.
	  Defaults to Y when the Broadcomd BCM2835 camera host is selected.

```
