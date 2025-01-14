---
sidebar_position: 1
---
# aarch64.config

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/wireguard/qemu/arch/aarch64.config`

### コンテンツ

```config
CONFIG_SERIAL_AMBA_PL011=y
CONFIG_SERIAL_AMBA_PL011_CONSOLE=y
CONFIG_VIRTIO_MENU=y
CONFIG_VIRTIO_MMIO=y
CONFIG_VIRTIO_CONSOLE=y
CONFIG_CMDLINE_BOOL=y
CONFIG_CMDLINE="console=ttyAMA0 wg.success=vport0p1 panic_on_warn=1"
CONFIG_FRAME_WARN=1280

```
