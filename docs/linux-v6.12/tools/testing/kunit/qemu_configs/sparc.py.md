---
sidebar_position: 10
---
# sparc.py

### ファイル情報

- パス: `linux-v6.12/tools/testing/kunit/qemu_configs/sparc.py`

### コンテンツ

```py
from ..qemu_config import QemuArchParams

QEMU_ARCH = QemuArchParams(linux_arch='sparc',
			   kconfig='''
CONFIG_SERIAL_8250=y
CONFIG_SERIAL_8250_CONSOLE=y''',
			   qemu_arch='sparc',
			   kernel_path='arch/sparc/boot/zImage',
			   kernel_command_line='console=ttyS0 mem=256M',
			   extra_qemu_params=['-m', '256'])

```
