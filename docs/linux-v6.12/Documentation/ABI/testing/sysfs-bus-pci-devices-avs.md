---
sidebar_position: 208
---
# sysfs-bus-pci-devices-avs

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-pci-devices-avs`

### コンテンツ

```txt
What:		/sys/devices/pci0000:00/<dev>/avs/fw_version
Date:		February 2024
Contact:	Cezary Rojewski <cezary.rojewski@intel.com>
Description:
		Version of AudioDSP firmware ASoC avs driver is communicating
		with.

		Format: %d.%d.%d.%d, type:major:minor:build.

```
