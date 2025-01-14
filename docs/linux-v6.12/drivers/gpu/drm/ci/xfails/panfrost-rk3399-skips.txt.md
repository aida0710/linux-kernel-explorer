---
sidebar_position: 54
---
# panfrost-rk3399-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/panfrost-rk3399-skips.txt`

### コンテンツ

```txt
# Suspend to RAM seems to be broken on this machine
.*suspend.*

# Skip driver specific tests
^amdgpu.*
^msm.*
nouveau_.*
^v3d.*
^vc4.*
^vmwgfx*

# Skip intel specific tests
gem_.*
i915_.*
tools_test.*

# Panfrost is not a KMS driver, so skip the KMS tests
kms_.*

# Skip display functionality tests for GPU-only drivers
dumb_buffer.*
fbdev.*

# Currently fails and causes coverage loss for other tests
# since core_getversion also fails.
core_hotunplug.*

```
