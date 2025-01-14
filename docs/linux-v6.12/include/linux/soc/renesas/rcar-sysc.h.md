---
sidebar_position: 3
---
# rcar-sysc.h

### ファイル情報

- パス: `linux-v6.12/include/linux/soc/renesas/rcar-sysc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __LINUX_SOC_RENESAS_RCAR_SYSC_H__
#define __LINUX_SOC_RENESAS_RCAR_SYSC_H__

int rcar_sysc_power_down_cpu(unsigned int cpu);
int rcar_sysc_power_up_cpu(unsigned int cpu);

#endif /* __LINUX_SOC_RENESAS_RCAR_SYSC_H__ */

```
