---
sidebar_position: 7
---
# hid-gamepad.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-gamepad.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_gamepad.py

bash ./run-hid-tools-tests.sh

```
