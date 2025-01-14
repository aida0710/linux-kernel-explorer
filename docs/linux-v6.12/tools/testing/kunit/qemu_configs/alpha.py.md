---
sidebar_position: 1
---
# alpha.py

### ファイル情報

- パス: `linux-v6.12/tools/testing/kunit/qemu_configs/alpha.py`

### コンテンツ

```py
from ..qemu_config import QemuArchParams

QEMU_ARCH = QemuArchParams(linux_arch='alpha',
			   kconfig='''
CONFIG_SERIAL_8250=y
CONFIG_SERIAL_8250_CONSOLE=y''',
			   qemu_arch='alpha',
			   kernel_path='arch/alpha/boot/vmlinux',
			   kernel_command_line='console=ttyS0',
			   extra_qemu_params=[])

```
