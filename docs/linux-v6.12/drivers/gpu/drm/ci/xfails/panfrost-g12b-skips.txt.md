---
sidebar_position: 47
---
# panfrost-g12b-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/panfrost-g12b-skips.txt`

### コンテンツ

```txt
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
