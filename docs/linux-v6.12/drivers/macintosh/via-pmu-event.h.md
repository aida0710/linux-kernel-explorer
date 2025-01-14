---
sidebar_position: 22
---
# via-pmu-event.h

### ファイル情報

- パス: `linux-v6.12/drivers/macintosh/via-pmu-event.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __VIA_PMU_EVENT_H
#define __VIA_PMU_EVENT_H

#define PMU_EVT_POWER	0
#define PMU_EVT_LID	1
extern void via_pmu_event(int key, int down);

#endif /* __VIA_PMU_EVENT_H */

```
