---
sidebar_position: 3
---
# thermal_testing.h

### ファイル情報

- パス: `linux-v6.12/drivers/thermal/testing/thermal_testing.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

extern struct dentry *d_testing;

int tt_add_tz(void);
int tt_del_tz(const char *arg);
int tt_zone_add_trip(const char *arg);
int tt_zone_reg(const char *arg);
int tt_zone_unreg(const char *arg);

void tt_zone_cleanup(void);

```
