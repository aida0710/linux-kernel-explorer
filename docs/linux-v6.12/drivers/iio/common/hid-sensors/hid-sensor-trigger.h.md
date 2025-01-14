---
sidebar_position: 3
---
# hid-sensor-trigger.h

### ファイル情報

- パス: `linux-v6.12/drivers/iio/common/hid-sensors/hid-sensor-trigger.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * HID Sensors Driver
 * Copyright (c) 2012, Intel Corporation.
 */
#ifndef _HID_SENSOR_TRIGGER_H
#define _HID_SENSOR_TRIGGER_H

#include <linux/pm.h>
#include <linux/pm_runtime.h>

struct hid_sensor_common;
struct iio_dev;

extern const struct dev_pm_ops hid_sensor_pm_ops;

int hid_sensor_setup_trigger(struct iio_dev *indio_dev, const char *name,
				struct hid_sensor_common *attrb);
void hid_sensor_remove_trigger(struct iio_dev *indio_dev,
			       struct hid_sensor_common *attrb);
int hid_sensor_power_state(struct hid_sensor_common *st, bool state);

#endif

```
